<?php

namespace App\Controller;

use App\Entity\Cities;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ScriptController extends AbstractController
{
//    /**
//     * @Route("/script", name="script")
//     */
//    public function index()
//    {
//        $this->importCity();
//        return $this->render('script/index.html.twig', [
//            'controller_name' => 'ScriptController',
//        ]);
//    }
//
//    public function importCity(){
//        $em = $this->getDoctrine()->getManager();
//        $ch = curl_init();
//
//        curl_setopt($ch, CURLOPT_URL,"https://geo.api.gouv.fr/regions/44/departements?fields=nom,code");
//        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//        $resD = curl_exec($ch);
//        dump($resD);
//        foreach (json_decode($resD, true) as $dep){
//            dump($dep);
//
//            curl_setopt($ch, CURLOPT_URL, "https://geo.api.gouv.fr/departements/".$dep['code']."/communes?fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=geojson&geometry=centre");
//            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//            $resC = curl_exec($ch);
//            dump($resC);
//            $resC = json_decode($resC, true);
//            dump($resC["features"]);
//            foreach ($resC["features"] as $city){
//                dump($city);
//                $ctyProp = $city["properties"];
//                foreach ($ctyProp["codesPostaux"] as $cp) {
//                    $cty = new Cities();
//                    $cty->setName($ctyProp["nom"].', '.$cp.' '.$dep["nom"]);
//                    $cty->setLat($city["geometry"]["coordinates"][0]);
//                    $cty->setLon($city["geometry"]["coordinates"][1]);
//                    $em->persist($cty);
//                }
//            }
//        }
//        $em->flush();
//    }
}
