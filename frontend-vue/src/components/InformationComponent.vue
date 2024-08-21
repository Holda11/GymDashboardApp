<script setup>
import ProfileWidgetComponent from '@/components/ProfileWidgetComponent.vue';
import CalendarComponent from '@/components/CalendarComponent.vue';
import ChallengesComponents from '@/components/ChallengesComponents.vue';
</script>
        <template>
            <aside class="InformationContainer">
                <ProfileWidgetComponent/>
                <CalendarComponent/>
                <ChallengesComponents/>
            </aside>
        </template>

<style scoped lang="scss">
.InformationContainer{
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 12px;
        border-right: 1px solid #c5c5c5;
        background-color: #727cb33a;
    }
</style>