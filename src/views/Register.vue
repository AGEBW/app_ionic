<template>
  <ion-page>


    <ion-content :fullscreen="true">


      <div id="container">
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>
              <div align="center">
                <ion-avatar>
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                </ion-avatar>
              </div>
            </ion-card-subtitle>
            <ion-card-title>Registrar</ion-card-title>

          </ion-card-header>

          <ion-card-content>
            <ion-item>
              <ion-label position="floating">Name</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating"  >Email</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">UserName</ion-label>
              <ion-input></ion-input>
            </ion-item>

            <br>
            <ion-button expand="block" color="light" >Registrar</ion-button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Register',
  components: {
    IonContent,

    IonPage,
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
</style>