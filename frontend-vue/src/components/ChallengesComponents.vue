<script setup lang="jsx">
const ChallengesInformation = ({ subHeadingText, subHeadingDate, heading, money }) => {
    return (
        <div class='ChallengesCard'>
            <div class='ChallengesCard__SubHeading'>
                <h5>{subHeadingText}: {subHeadingDate}</h5>
                <strong>{heading}</strong>
            </div>
            <div class='ChallengesCard__Money'>
                <span>{money}</span>
            </div>
        </div>
    )
}

// Příklad, jak byste mohli vypočítat datum
const lastTime = new Date();
</script>

<template>
    <div class="Challenges">
        <h3>Challenges</h3>
        <ChallengesInformation :subHeadingText="'Poslední nákup'" :subHeadingDate="lastTime.toDateString()" heading="Vstupy"
            :money="5246" />
        <ChallengesInformation :subHeadingText="'Poslední nákup'" :subHeadingDate="lastTime.toDateString()" heading="Vstupy"
            :money="5246" />
    </div>
</template>

<style lang="scss">
@import '../assets/styles/variables.scss';
.Challenges{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: fit-content;
    padding: 6px 12px;
}
.ChallengesCard{
    background-color: #fff;
    border: solid #c5c5c5;
    margin: 2px 0;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 35px;
    &__SubHeading{
        padding: 12px;
        h5{
            font-weight: 400;
        }
        strong{
            font-size: 26px;
        }
    }
    &__Money{
        padding: 12px;
        span{
            font-weight: 500;
            border: 6px solid $highlight-Bgcolor;
            padding: 16px 6px;
            margin: 4px;
            border-radius: 50%;
        }
    }
}
</style>
