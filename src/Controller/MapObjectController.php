<?php

namespace App\Controller;

use App\Entity\MapObject;
use App\Form\MapObjectType;
use App\Service\MapObjectService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MapObjectController
 *
 * @Route("/list")
 */
class MapObjectController extends AbstractController
{
    private $mapObjectService;

    /**
     * MapObjectController constructor.
     *
     * @param MapObjectService $mapObjectService
     */
    public function __construct(MapObjectService $mapObjectService)
    {
        $this->mapObjectService = $mapObjectService;
    }

    /**
     * @Route("/", name="map_objects_list")
     *
     * @return Response
     */
    public function indexAction(): Response
    {
        return $this->render('list/index.html.twig', []);
    }

    /**
     * @Route("/get-list", name="get_objects_list")
     *
     * @return JsonResponse
     */
    public function getListAction(): JsonResponse
    {
        return $this->json($this->mapObjectService->prepareResponseData());
    }

    /**
     * @Route("/delete/{id}", name="delete_map_object")
     *
     * @param MapObject $mapObject
     *
     * @return JsonResponse
     */
    public function deleteAction(MapObject $mapObject): JsonResponse
    {
        $this->mapObjectService->deleteMapObject($mapObject);

        return $this->json([
            'message' => 'map object has been deleted',
        ]);
    }

    /**
     * @Route("/create", name="create_map_object")
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function createAction(Request $request)
    {
        $content = json_decode($request->getContent());
        $form = $this->createForm(MapObjectType::class);
        $form->submit((array)$content);

        if (!$form->isValid()) {
            $errors = [];
            foreach ($form->getErrors(true, true) as $error) {
                $propertyName = $error->getOrigin()->getName();
                $errors[$propertyName] = $error->getMessage();
            }

            return $this->json([
                'message' => ['text' => implode('\n', $errors), 'level' => 'error']
            ]);
        }
        $this->mapObjectService->saveMapObject($form->getData());

        return $this->json([], 200);
    }

    /**
     * @Route("/get-last-map-object", name="get_last_map_object")
     *
     * @return JsonResponse
     */
    public function getLastAction(): JsonResponse
    {
        return $this->json($this->mapObjectService->getLastMapObject());
    }
}
