<?php

namespace App\Form;

use App\Entity\MapObject;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class MapObjectType
 */
class MapObjectType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('city', TextType::class)
            ->add('temp', NumberType::class)
            ->add('clouds', IntegerType::class)
            ->add('windSpeed', NumberType::class)
            ->add('description', TextType::class)
            ->add('lat', TextType::class)
            ->add('lon', TextType::class)
            ->add('icon', TextType::class);
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => MapObject::class,
            'csrf_protection' => false,
        ]);
    }
}
