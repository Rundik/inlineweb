<template>
  <div class="error-msg" :class="color" v-if="visible">
    <span class="brief">{{ brief }}: </span>
    <span class="message">{{ message }}</span>
    <div class="close" @click="visible=false"></div>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus.js";

export default {
  name: "message",
  data() {
    return {
      visible: false,
      brief: "",
      message: "",
      color: ""
    };
  },
  created() {
    EventBus.$on(
      "error",
      (brief = "Error", message = "Undefined error occurred") => {
        this.brief = brief;
        this.message = message;
        this.visible = true;
        this.color = "red";
        let self = this;
        setTimeout(function() {
          self.visible = false;
        }, 7000);
      }
    );
    EventBus.$on(
      "success",
      (brief = "Success", message = "Action is successfully completed") => {
        this.brief = brief;
        this.message = message;
        this.visible = true;
        this.color = "green";
        let self = this;
        setTimeout(function() {
          self.visible = false;
        }, 7000);
      }
    );
  }
};
</script>

<style scoped lang="scss">
.error-msg {
  position: absolute;
  z-index: 99999999999;
  margin: 15px;
  padding: 15px;
  color: $editorThemeBg;
  bottom: 0;
  animation: slide-top 1s cubic-bezier(0, 0.57, 0, 1) both;
  transform: translateX(-100vw);
  padding-right: 60px;
  min-height: 50px;
  &.red {
    background-color: $red;
    .close {
      background-color: darken($red, 5);
    }
  }
  &.green {
    background-color: $green;
    .close {
      background-color: darken($green, 5);
    }
  }
  &.yellow {
    background-color: $yellow;
    .close {
      background-color: darken($yellow, 5);
    }
  }
  .brief {
    font-size: 1.2em;
    font-weight: 600;
  }
  .close {
    @include close(50px, lighten($editorThemeBg, 10));
  }
}

@keyframes slide-top {
  0% {
    transform: translateX(-1000vw);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
