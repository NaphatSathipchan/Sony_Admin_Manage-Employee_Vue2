<template>
  <section :style="{
    backgroundImage:
      'url(https://www.sonydevicetechnology.co.th/Contents/about/SDT2023.png)',
    width: '100%',
    height: '742px'
  }">
    <Add/>
    <Emp_name/>
    <Emp_Number/>
    <Imange/>
  </section>
</template>

<script>
import Add from '@/components/Add.vue'
import Emp_name from '@/components/Emp_name.vue';
import Emp_Number from '@/components/Emp_Number.vue';
import Imange from '@/components/Imange.vue';


export default {
    name: "Admin",
    components: {
    Add,
    Emp_name,
    Emp_Number,
    Imange
  }
}

</script>

