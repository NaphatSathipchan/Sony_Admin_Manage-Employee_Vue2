<template>

<div className="background">
  
  
  
  <div className="rectangle" >
     <div className="text-wrapper">Add Images</div>
  </div>
  

    <Add/>
    <Emp_name/>
    <Emp_Number/>
    <Imange/>
</div>
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

<style scoped>

.background {
background-color: #f5f8ff;
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
}


.text-wrapper {
    color: #1c1c1c;
    font-family: "Kanit-Medium", Helvetica;
    font-size: 64px;
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position:absolute;
    text-shadow: 0px 4px 4px #00000040;
    top: 50px;
    height: 396px;
    width: 439px;
}




.rectangle {
    background-color: #ffffff;
    border-radius: 14px;
    box-shadow: 0px 4px 4px #00000040;
    height: 730px;
    left: 100px;
    position: fixed;
    top: 10px;
    width: 1390px;
}

</style>