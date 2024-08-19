<script setup lang="tsx">
interface InformationProps {
  heading: string;
  information: string;
  styleClass: string;  // Použití "styleClass" namísto "style"
}
const Info = ({heading, information, styleClass}: InformationProps) =>{
        return(
            <div class={styleClass}>
                <h5>{heading}</h5>
                <strong>{information}</strong>
            </div>
        )
    }
</script>


<template>
  <div class="ProfileWidget">
    <div class="ProfileWidget__Row">
      <h3>Profile</h3>
      <button>Přejít</button>
    </div>
    <div class="ProfileWidget__ImageContainer">
      <div class="ProfileWidget__ImageContainer--Image">
        <img src="/Img/Person.jfif" alt="Profile Picture" />
      </div>
      <strong>Joe Doe</strong>            
    </div>
    <div class="ProfileWidget__Row">
      <Info styleClass="Information__left" heading="Pozice" information="Brigádník"/>
    <Info styleClass="Information__center" heading="Pozice" information="Brigádník"/>
    <Info styleClass="Information__right" heading="Pozice" information="Brigádník"/>
    </div>
  </div>
</template>


<style lang="scss">
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixin.scss';

.ProfileWidget {
    height: fit-content;
    padding: 6px 12px;
    border: 1px solid #c5c5c5;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__Row {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        &-Gap {
            gap: 10px;
        }
        button {
            color: #fff;
            font-weight: 500;
            background: $highlight-Bgcolor;
            padding: 6px 12px;
        }
    }
    &__ImageContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 92px;
            height: 92px;
            object-fit: cover;
            border-radius: 50%;
            border: 4px solid $highlight-Bgcolor;
        }
    }
}
.Information__left, .Information__center, .Information__right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px;
    margin: 8px;
    background-color: $secondary-Bgcolor;
    h5 {
        font-weight: 400;
    }
    strong {
        margin: 6px 2px;
    }
}

.Information__left {
    border-radius: 12px 0 0 12px;
}

.Information__right {
    border-radius: 0 12px 12px 0;
}
</style>
