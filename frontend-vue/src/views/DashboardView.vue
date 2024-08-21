<script setup>
import CalendarComponent from '@/components/CalendarComponent.vue';
import PopularClassComponent from '@/components/PopularClassComponent.vue';
import ProfileWidgetComponent from '@/components/ProfileWidgetComponent.vue';
import TimelineComponent from '@/components/TimelineComponent.vue';
import ChallengesComponents from '@/components/ChallengesComponents.vue';
import CountingComponent from '@/components/CountingComponent.vue';


</script>

<template>
    <section class="Dashboard">
        <div class="Dashboard__Column">
            <div class="Dashboard__Text">
                <h2>Ahoj Joe, jak se dneska máte?</h2>
            </div>
            <div class="Row">
                <CountingComponent/>
                <PopularClassComponent/>
            </div>
            <div class="Dashboard__Bottom">
                <TimelineComponent/>
            </div>
        </div>
        
    </section>
</template>

<style scoped lang="scss">
.Dashboard{
    width: 100%;
    max-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    &__Column{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-right: 1px solid #c5c5c5;
        gap: 10px;
    }
    &__Bottom{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    &__Text{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 50%;
        border-bottom: 1px solid #c5c5c5 ;
    }
}
.Row{
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #c5c5c5;
    margin: 10px 0;
}
.Icon{
    font-size: 32px;
    color: #a3a3a3;
}
.Gap{
    display: flex;
    gap: 16px;
}
</style>