<?php

namespace App\Entity;

use App\Repository\MapObjectRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MapObjectRepository::class)
 */
class MapObject
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city;

    /**
     * @ORM\Column(type="float")
     */
    private $temp;

    /**
     * @ORM\Column(type="integer")
     */
    private $clouds;

    /**
     * @ORM\Column(type="float")
     */
    private $windSpeed;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\Column(type="float")
     */
    private $lat;

    /**
     * @ORM\Column(type="float")
     */
    private $lon;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $icon;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * MapObject constructor.
     */
    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return null|string
     */
    public function getCity(): ?string
    {
        return $this->city;
    }

    /**
     * @param string $city
     *
     * @return MapObject
     */
    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    /**
     * @return float|null
     */
    public function getTemp(): ?float
    {
        return $this->temp;
    }

    /**
     * @param float $temp
     *
     * @return MapObject
     */
    public function setTemp(float $temp): self
    {
        $this->temp = $temp;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getClouds(): ?int
    {
        return $this->clouds;
    }

    /**
     * @param int $clouds
     *
     * @return MapObject
     */
    public function setClouds(int $clouds): self
    {
        $this->clouds = $clouds;

        return $this;
    }

    /**
     * @return float|null
     */
    public function getWindSpeed(): ?float
    {
        return $this->windSpeed;
    }

    /**
     * @param float $windSpeed
     *
     * @return MapObject
     */
    public function setWindSpeed(float $windSpeed): self
    {
        $this->windSpeed = $windSpeed;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @param string $description
     *
     * @return MapObject
     */
    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return null|float
     */
    public function getLat(): ?float
    {
        return $this->lat;
    }

    /**
     * @param float $lat
     *
     * @return MapObject
     */
    public function setLat(float $lat): self
    {
        $this->lat = $lat;

        return $this;
    }

    /**
     * @return null|float
     */
    public function getLon(): ?float
    {
        return $this->lon;
    }

    /**
     * @param float $lon
     *
     * @return MapObject
     */
    public function setLon(float $lon): self
    {
        $this->lon = $lon;

        return $this;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    /**
     * @param \DateTimeInterface $createdAt
     *
     * @return MapObject
     */
    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getIcon(): ?string
    {
        return $this->icon;
    }

    /**
     * @param string $icon
     *
     * @return MapObject
     */
    public function setIcon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }
}
