<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>ShopCar</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-list>
          <ion-item-sliding>

            <ion-item v-for="item in coleccion" :key="item.id" v-show="item.cant!=0">
              <ion-avatar>
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsantiagocaruso.com.ar%2Fwp-content%2Fuploads%2F2017%2F11%2F20900845_10156379092008475_4739202457655480608_o.jpg&f=1&nofb=1">
              </ion-avatar>
              <ion-label >{{item.ProductName}}</ion-label>
              <ion-label >{{item.Price}}</ion-label>
              <ion-label >{{(item.cant == undefined || item.cant == null)?'1':item.cant}}</ion-label>
              <ion-button shape="round" fill="outline" size="small" @click="Eliminar(item.id)">x</ion-button>
            </ion-item>
            <ion-button color="tertiary" >Comprar</ion-button>
          </ion-item-sliding>


        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,alertController,
  IonItemSliding,IonItem,
  IonList } from '@ionic/vue';
import {defineComponent} from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'ShopCar',
  components: {
    IonItem,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItemSliding,
    IonList,

  },
  data:()=>({
    coleccion:[]
  }),
  methods:{
    Obtener:function(){
      const a=localStorage.getItem('carrito');
      if(a!=null){
        this.coleccion=JSON.parse(a);

      }else{
        console.log('vacio');
      }

    },
    Editar:function(id: any){
      localStorage.setItem('ProductId',id);
      this.$router.push('/productedit');
    },
    Eliminar:async function(id: any){

      const vue = this.$data;

      const alert = await alertController
          .create({
            cssClass: 'my-custom-class',
            header: 'Alert',
            message: 'Delete item?',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                  console.log('Confirm Cancel')
                },
              },
              {
                text: 'Delete',
                handler: () => {
                  vue.coleccion.forEach((item: any)=>{
                    if(item.id == id){
                      if(item.cant == undefined || item.cant == null){
                        item.cant=0;
                      }else{
                        item.cant=item.cant-1;
                      }
                    }
                  });

                  localStorage.setItem('carrito',JSON.stringify(vue.coleccion))
                },
              },
            ],
          });

      return alert.present();
    }
  },
  created(){
    this.Obtener();
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