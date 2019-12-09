import React, { Component } from 'react';
import mapa from 'http://maps.google.com/maps/api/js?sensor=false';

export default class Localizacao extends Component {

  constructor() {
    super();
    this.state = locations = [
      ["Bondi Beach", -33.890542, 151.274856, 4],
      ["Coogee Beach", -33.923036, 151.259052, 5],
      ["Cronulla Beach", -34.028249, 151.157507, 3],
      ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
      ["Maroubra Beach", -33.950198, 151.259302, 1]
    ];
  }



  _Mapa = () => {
    fetch("http://localhost:5000/api/localizacoes" )
    .then(resposta => resposta.json())
    .then(data => montarMapa(data))
    .catch(error => console.log(error));
    
    function montarMapa(itens) {
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: new google.maps.LatLng(-23.5345442, -46.6493879),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      
      var infowindow = new google.maps.InfoWindow();
      
      var marker, i;
      
      for (i = 0; i < itens.length; i++) {
        console.log(itens[i].latitude);
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(
            itens[i].latitude,
            itens[i].longitude
            ),
            map: map
          });
          
          google.maps.event.addListener(
            marker,
            "click",
            (function (marker, i) {
              return function () {
                infowindow.setContent(itens[i].id);
                infowindow.open(map, marker);
              };
            })(marker, i)
            );
          }
        }
      }
        
  render(){
    return (
        mapa
      );
    }
  }
