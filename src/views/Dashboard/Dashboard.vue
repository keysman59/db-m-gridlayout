<template>
  <v-app class="dashboard-gradient app-background--primary">
    <div data-app>
      <grid-layout
        :col-num="parseInt(colNum)"
        :is-draggable="draggable"
        :is-mirrored="mirrored"
        :is-resizable="resizable"
        :layout.sync="diagrams"
        :prevent-collision="preventCollision"
        :responsive="responsive"
        :row-height="rowHeight"
        :use-css-transforms="true"
        :vertical-compact="true"
      >
      </grid-layout>
    </div>
  </v-app>
</template>

<script>
import GridLayout from "@/components/DraggableGrid/GridLayout.vue"

  export default {
    name: 'Home-view',
    data() {
      return {
        colNum: 12,
        draggable: true,
        resizable: true,
        mirrored: false,
        diagrams: [],
        preventCollision: false,
        responsive: true,
        rowHeight: 45,
      }
    },
    components: {
      GridLayout
    },
  }
</script>
