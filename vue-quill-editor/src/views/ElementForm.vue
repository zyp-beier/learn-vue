<template>
    <div>
      <CustomForm size="small" >
        <CustomFormItem label="姓名" >
          <CustomInput v-model="formData.name" :disabled="true"></CustomInput>
        </CustomFormItem>
      </CustomForm>
    </div>
</template>

<script>
  import CustomFormItem from '../components/CustomFormItem';
  import CustomInput from '../components/CustomInput';
  import CustomForm from '../components/CustomForm';
  export default {
    name: 'ElementForm',
    components: { CustomForm,  CustomFormItem, CustomInput},
    data() {
      return{
        formData: {
          name: '',
          age: 0
        }
      }
    }
  };
</script>

<style scoped>

</style>
