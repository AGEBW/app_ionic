<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Shop</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-label size="large">Blank</ion-label>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">

        <ion-card v-for="item in coleccion" :key="item.id">
          <ion-card-header>
            <ion-card-subtitle>
              <div align="center">

                  <img class="product-img" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsantiagocaruso.com.ar%2Fwp-content%2Fuploads%2F2017%2F11%2F20900845_10156379092008475_4739202457655480608_o.jpg&f=1&nofb=1">

              </div>
            </ion-card-subtitle>


          </ion-card-header>
          <div align="start" class="labels">
            <ion-label>Nombre: {{item.ProductName}}</ion-label>

          </div>
          <div align="end" class="labels">

            <ion-label style="padding-left: 40px">Precio:
              {{item.Price}}
            </ion-label>
          </div>
          <br>
          <p>
           Descripcion: {{item.Detail}}
          </p>
          <br>
          <ion-button color="tertiary" @click="Editar(item.id)">Ver</ion-button>
          <br>
        </ion-card>
      </div>
      <ion-infinite-scroll
          @ionInfinite="loadData($event)"
          threshold="100px"
          id="infinite-scroll"
          :disabled="isDisabled"
      >
        <ion-infinite-scroll-content
            loading-spinner="crescent"
            loading-text="Loading ">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/vue';
import {defineComponent, ref} from 'vue';
import axios from "axios";

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  },
  data:()=>({
  coleccion:[]
  }),
  methods:{
    Obtener:function(){
      const vue = this.$data;

      axios.get("https://api24723.herokuapp.com/api/product",{

      }).then(response=>{
        const {data} = response.data;
        // console.log(data);
        vue.coleccion=data;

      });
    },
    Editar:function(id: any){
      localStorage.setItem('ProductId',id);
      this.$router.push('/details');
    }
  },
    created(){
  this.Obtener();
  },
  setup() {
    const isDisabled = ref(false);
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value;
    }
    const items = ref([]);
    const pushData = () => {
      const max = items.value.length + 20;
      const min = max - 20;
      for (let i = min; i < max; i++) {
        items.value.push(i);
      }
    }

    const loadData = (ev: CustomEvent) => {
      setTimeout(() => {
        pushData();
        console.log('Loaded data');
        ev.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (items.value.length == 1000) {
          ev.target.disabled = true;
        }
      }, 500);
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
  max-width: 200px;
  max-height: 200px;
}
.labels{
  padding-left:20px ;
  padding-right: 20px;
}
</style>