<template>
    <div class="about">
<!--        <test></test>-->
<!--        <img src="../assets/svg/empty.svg" alt="">-->
<!--        <component :is="icons[item.iconName]" class="icon"></component>-->
        <button @click="add">Add</button>

        <draggable tag="ul" :list="list" handle=".handle">
            <li v-for="(element, idx) in list" :key="idx">
                <i class="handle">1</i>

                <span class="text">{{ element.name }} </span>

                <input type="text" v-model="element.text" />

                <i class=" close" @click="removeAt(idx)">2</i>
            </li>
        </draggable>
        <div class="aa bb" @click="cc" ref="ff">
            123
        </div>
        <input type="text" @change="change" @input="input">
        <div v-show="false">

        </div>
        <div v-show="true">
            <index></index>
        </div>
        <div v-show="false">
            <index></index>
        </div>
    </div>
</template>
<script>
    import Index from "../components/index";
    let id = 3;
    import draggable from 'vuedraggable'
    export default {
        data() {
            return {
                list: [
                    { name: "12", text: "", id: 0 },
                    { name: "78", text: "", id: 1 },
                    { name: "96", text: "", id: 2 }
                ],
                message: '组件'
            }
        },
        components:{
            Index,
            draggable,
        },
        mounted() {
          window.onpopstate = function() {
                console.log(123)
            }
        },
        methods: {
            removeAt(idx) {
                this.list.splice(idx, 1);
            },
            add: function() {
                id++;
                this.list.push({ name: id, id, text: "" });
            },
            cc() {
                let ff = this.$refs.ff
                console.log(ff)
                console.log(ff.classList)
            },
            change(e){
                console.log(e)
            },
            input(e) {
                console.log(e)
            }
        }
    }
</script>
<style>
    .handle {
        float: left;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .close {
        float: right;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    input {
        display: inline-block;
        width: 50%;
    }
    .text {
        margin: 20px;
    }
</style>
