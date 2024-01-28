<template>
    <div class="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
        <home-hero class="snap-start"/>
        <offer class="snap-start"/>
        <stories class="snap-start"/>
        <get-contact class="snap-start"/>
    </div>
</template>
<script setup>
import HomeHero from '../components/HomeHero.vue';
import Offer from '../components/Offer.vue';
import Stories from '../components/Stories.vue'
import GetContact from '../components/GetContact.vue';
</script>