<?php

namespace App\Controller;

use App\Entity\MapObject;
use App\Service\MapObjectService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
}
