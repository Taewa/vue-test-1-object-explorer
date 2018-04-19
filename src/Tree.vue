<template>
    <section id="tree">
        <div v-for="(val, key) in internalData">
            <!--In case val is an object-->
            <template v-if="isObject(val)">
                <div class="object-tree-area">
                    <span class="key">
                        <!--{{key}}-->
                        <editable :editableData="key" v-on:updateVal="updateKey($event, treeData)"></editable>:
                    </span>
                    <tree :treeData="val"></tree>
                </div>
            </template>

            <!--In case val is NOT an object-->
            <template v-else>
                <div class="key-val-area">
                    <!--<span class="key">{{key}}: </span>-->
                    <span class="key">
                        <editable :editableData="key" v-on:updateVal="updateKey($event, treeData)"></editable>:
                    </span>

                    <editable :editableData="val" v-on:updateVal="updateVal($event, treeData, key)"></editable>

                    <!--<div class="val-area">-->

                    <!--<div class="val-readonly"-->
                    <!--v-on:click="toggleValEdit(val)"-->
                    <!--v-if="!valEdit">-->

                    <!--<span>{{val}}</span>-->
                    <!--</div>-->

                    <!--<div class="val-edit" v-else>-->
                    <!--<input type="text" v-model="treeData[key]">-->
                    <!--<button type="button" v-on:click="updateVal(treeData[key])">confirm</button>-->
                    <!--<button type="button" v-on:click="cancelEdit(treeData, key)">cancel</button>-->
                    <!--</div>-->

                    <!--</div>-->
                </div>
            </template>

        </div>

    </section>
</template>


<script>
    import Editable from './Editable.vue'
    export default {
        name: 'tree',
        props: [
            'treeData'
        ],
        components: {
            Editable
        },
        computed: {},
        data () {
            return {
                internalData: Object.assign({}, this.treeData),
                valEdit: false,
                storedVal: null
            }
        },
        methods: {
            isObject: function (val) {
                return val.constructor.name === "Object";
            },

            toggleValEdit: function (storedVal) {
                this.valEdit = !this.valEdit;
                this.storedVal = storedVal;
            },

            //check : https://stackoverflow.com/questions/48082071/js-rename-an-object-key-while-preserving-its-position-in-the-object
            updateKey: function (keys, obj) {
                const newKey = keys.newVal;
                const oldKey = keys.oldVal;
//
//                if (newKey === oldKey) return;
//
//                const val = obj[oldKey];
//
//                obj[newKey] = val;
//                obj[newKey] = obj[oldKey];
                const res = this.renameObjKey(this.treeData, oldKey, newKey);
                console.log('res', res);
                console.log('treeData', this.treeData);
                console.log('store???', this.$store);
//                this.treeData = Object.assign({},res);
//                delete obj[oldKey];

                this.$forceUpdate();

            },

            updateVal: function (vals, obj, key) {
                obj[key] = vals.newVal;
            },

            cancelEdit: function (obj, key) {
                obj[key] = this.storedVal;
                this.storedVal = null;
                this.toggleValEdit();

            },

            renameObjKey: function (oldObj, oldKey, newKey) {
                const keys = Object.keys(oldObj);
                const newObj = keys.reduce((acc, val) => {
                    if (val === oldKey) {
                        acc[newKey] = oldObj[oldKey];
                    }
                    else {
                        acc[val] = oldObj[val];
                    }
                    return acc;
                }, {});

                return newObj;
            }
        }
    }


</script>


<style lang="scss">
    #tree {
        text-align: left;
        padding-left: 24px;

        .key {
            display: inline-block;
            padding: 1px 0px;
            color: #000;
            font-weight: bold;
        }

        .val-area {
            display: inline-block;
            color: #41b882;
            font-weight: bold;
        }

        input {
            background: #ffffc8;
            border: none;
            padding: 5px;
            font-size: 14px;
            display: inline-block;
        }
    }
</style>


