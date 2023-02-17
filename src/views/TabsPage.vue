<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Dashboard" href="/tabs/Dashboard">
          <ion-icon :icon="grid" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Library" href="/tabs/Library">
          <ion-icon :icon="albums" />
          <ion-label>Library</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Settings" href="/tabs/Settings">
          <ion-icon :icon="settings" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { albums, settings, grid } from 'ionicons/icons';

</script>
