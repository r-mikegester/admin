<template>
  <ion-page>
    <ion-header> <ion-toolbar>
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment value="all">
          <ion-segment-button value="stats" href="/tabs/Stats">
            Stats
          </ion-segment-button>
          <ion-segment-button value="Clients">
            Clients
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" ref="content" class="grid grid-cols-2 grid-flow-row">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <IonGrid class="grid grid-cols-2 md:grid-cols-4">
        <ion-card class="col-span-2 row-span-2">
          <img alt="Upper Body Workout" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <ion-card-header>
            <ion-card-title>Upper Body Muscle Group Workout </ion-card-title>
            <ion-card-subtitle class="text-yellow-500">by Coach Da</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            A workout specialized for the Upper Body that will utilized the reps and sets in a whole session.
          </ion-card-content>
        </ion-card>

      </IonGrid>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, } from '@ionic/vue';

//import ExploreContainer from '@/components/ExploreContainer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonTitle, IonToolbar, IonHeader, IonPage, IonGrid },

});
</script>
<style scoped>
/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}
</style>