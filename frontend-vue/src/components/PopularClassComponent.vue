<script setup lang="jsx">
</script>

<template>
    <div class="PopularClass">
        <div class="PopularClass__Text"><h3>Popular Classes</h3></div>
        <div class="PopularClass__ImageContainer--Cardio">
            <h4>Cardio</h4>
        </div>
        <div class="PopularClass__ImageContainer--Box">
            <h4>Box</h4>
        </div>
        <button>See all classes</button>
    </div>
</template>

<style lang="scss">
@import '../assets/styles/variables.scss';

.PopularClass{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 6px 12px;
    margin: 6px;
    border: 1px solid #c5c5c5;
    border-radius: 15px;
    height: 100%;
    margin: 12px;

    &__Text{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }

    &__ImageContainer{
        &--Cardio{
        width: 460px;
        height: 240px;
        overflow: hidden;
        border-radius: 15px;
        background-position: initial;
        background-repeat: no-repeat;
        background-clip: content-box;
        background-size: cover;
        position: relative;
        background-image: url('../../../public/Img/Cardio.jpg'); 
        }
        &--Box{
        width: 460px;
        height: 220px;
        overflow: hidden;
        border-radius: 15px;
        background-position: center;
        background-repeat: no-repeat;
        background-clip: content-box;
        background-size: auto;
        position: relative;
            background-image: url('../../../public/Img/Boxing.jpg'); 
        }
    }
    h4{
        color: #fff;
        font-weight: 400;
        font-size: 32px;
        margin: 0;
        position: absolute;
        bottom: 6px;
        left: 64px;
    }
    button{
        color: #fff;
        background: $highlight-Bgcolor;
        padding: 6px 12px;
        font-weight: 500;
    }
}
.Icon{
    font-size: 24px;
    color: #a3a3a3;
}
</style>