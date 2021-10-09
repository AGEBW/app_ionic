<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Details</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>
              <div align="center">

                <img class="product-img" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsantiagocaruso.com.ar%2Fwp-content%2Fuploads%2F2017%2F11%2F20900845_10156379092008475_4739202457655480608_o.jpg&f=1&nofb=1">

              </div>
            </ion-card-subtitle>


          </ion-card-header>
          <div align="start" class="labels">
            <ion-label>Nombre: Materia Oscura</ion-label>

          </div>
          <div align="end" class="labels">

            <ion-label style="padding-left: 40px">
              Precio: $250.50
            </ion-label>
          </div>
          <br>
          <div align="start" class="labels">
            <ion-label>Marca: </ion-label>

          </div>
          <p>
          Detalles: La nueva recopilacion de obras del prestigiado pintor Santiago Caruso
          </p>
          <br>
          <ion-button color="tertiary">Comprar</ion-button>
          <br>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Details',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

.product-img{
  max-width: 250px;
  max-height: 250px;
}
.labels{
  padding-left:20px ;
  padding-right: 20px;
}
</style>