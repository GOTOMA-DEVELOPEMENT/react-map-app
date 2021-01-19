<?php

namespace App\Repository;

use App\Entity\MapObject;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Class MapObjectRepository
 */
class MapObjectRepository extends ServiceEntityRepository
{
    /**
     * MapObjectRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MapObject::class);
    }

    /**
     * @return mixed
     */
    public function getMostSearchedCity()
    {
        return $this->createQueryBuilder('map_object')
            ->select('map_object.city', 'COUNT(map_object.city) as occurrence')
            ->groupBy('map_object.city')
            ->orderBy('occurrence', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getSingleResult();
    }

    public function getTempStats()
    {
        return $this->createQueryBuilder('map_object')
                    ->select(
                        'MAX(map_object.temp) as maxTemp',
                        'MIN(map_object.temp) as minTemp',
                        'AVG(map_object.temp) as avgTemp'
                        )
                    ->getQuery()
                    ->getSingleResult();
    }

    public function getNumberOfRecords()
    {
        return $this->createQueryBuilder('map_object')
                    ->select('COUNT(map_object.id)')
                    ->getQuery()
                    ->getSingleScalarResult();
    }
}
