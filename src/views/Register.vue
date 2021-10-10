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
              <ion-input :value="Name" @change="change('Name',$event.target.value)"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input :value="Email" @change="change('Email',$event.target.value)"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password" :value="Password" @change="change('Password',$event.target.value)"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">UserName</ion-label>
              <ion-input :value="UserName" @change="change('UserName',$event.target.value)"></ion-input>
            </ion-item>

            <br>
            <ion-button expand="block" color="light" @click="Registrar" >Registrar</ion-button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import {defineComponent, ref} from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Register',
  components: {
    IonContent,
    IonPage,
  },
  data:()=>({
    Name:"",
    Email:"",
    Password:"",
    UserName:"",
  }),
  methods:{
    change:function(name: any,val: any){
      switch (name) {
      case "Name": this.Name = val;
        break;
      case "Email": this.Email = val;
        break;
      case "Password": this.Password = val;
        break;
      case "UserName": this.UserName = val;
        break;
      }
    },
    Registrar:function(){
      // console.log();
      axios.post("http://localhost/api/register/user",{
        Name:this.Name,
        Email:this.Email,
        Password:this.Password,
        UserName:this.UserName
      }).then(response=>{
        console.log(response);
        this.$router.push('/');
      });
    }
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