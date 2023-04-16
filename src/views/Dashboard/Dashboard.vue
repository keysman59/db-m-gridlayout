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
        <grid-item
          :h="item.h"
          :i="item.i"
          :is-draggable="isEdit && item.draggable"
          :is-resizable="isEdit && item.resizable"
          :key="item.id"
          :minH="
            item.graphType == 'counter' ||
            item.graphType == 'pulse' ||
            item.graphType == 'grid'
              ? 3
              : item.graphType == 'pie' || item.graphType == 'donut'
              ? 9
              : 6
          "
          :minW="
            item.graphType == 'counter' || item.graphType == 'pulse' ? 1 : 3
          "
          :static="item.static"
          :w="item.w"
          :x="item.x"
          :y="item.y"
          @moved="updateDiagram(item, index)"
          @resized="updateDiagram(item, index)"
          style="overflow: hidden"
          v-for="(item, index) of diagrams"
        >
        </grid-item>
      </grid-layout>
    </div>
  </v-app>
</template>

<script>
import GridLayout from "@/components/DraggableGrid/GridLayout.vue"
import GridItem from "@/components/DraggableGrid/GridItem.vue"
import localDiagrams from '@/localData/diagrams.js'

  export default {
    name: 'Home-view',
    data() {
      return {
        colNum: 12,
        draggable: true,
        resizable: true,
        mirrored: false,
        diagrams: localDiagrams,
        preventCollision: false,
        responsive: true,
        rowHeight: 45,
      }
    },
    components: {
      GridLayout,
      GridItem
    },
  }
</script>
