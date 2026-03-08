<template>
    <v-card class="ma-4">
    <v-img :src="product.image" height="200"/>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-text>
        <p><strong>Precio:</strong>${{ product.price }}</p>
        <p><strong>Categoría:</strong>{{ product.category }}</p>
    </v-card-text>
    </v-card>
</template>

<script>
export default{
name: "ProductCard",
props:["product"],
mounted(){
console.log("Producto cargado")
}
}
</script>