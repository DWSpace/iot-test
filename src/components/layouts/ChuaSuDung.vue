<template>
  <div class="overflow-x-auto">
  <table class="table w-full">
    <!-- head -->
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script setup>
import { ref } from "vue";
const menu = ref();
const toggle = (event) => {
    menu.value.toggle(event);
    console.log(menu.value)
};
const items = ref([
    {
        label: 'File',
        items: [
            {
                label: 'New',
   
                items: [
                    {
                        label: 'Bookmark',
       
                    },
                    {
                        label: 'Video',
                        to: '/diary'
                   
                    }
                ]
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },    
]);
</script>
<style lang="scss" scoped>
table, th, td {
  border: 1px solid;
}
table {
  border-collapse: collapse;
  width: 100%;
}
</style>
