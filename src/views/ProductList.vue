<template>
    <v-container>
        <h2 class="text-h4 mb-4">Catálogo de Productos</h2>
        <v-select label="Filtrar categoría" :items="categorias"
        v-model="categoria" clearable/>  

        <v-row>
            <v-col cols="12" md="4"
                v-for="product in filteredProducts"
                :key="product.id">
                <ProductCard :product="product"/>
            </v-col>
        </v-row>

        <v-alert v-if="loading" type="info">Cargando productos...</v-alert>
        <v-alert v-if="error" type="error">Error cargando productos</v-alert>
    </v-container>
</template>

<script>
import { mapState,mapActions } from "vuex"
import ProductCard from "../components/ProductCard.vue"

export default{

components:{ProductCard},
data(){
return{
categoria:"",
categorias:[
"electronics",
"mens clothing",
"womens clothing",
"jewelery"
]
}
},

computed:{
...mapState("products",["products","loading","error"]),
filteredProducts(){
    if(!this.categoria) return this.products
    return this.products.filter(
    p=>p.category===this.categoria
    )
}
},

mounted(){
this.fetchProducts()
},

methods:{
...mapActions("products",["fetchProducts"])
}
}
</script>