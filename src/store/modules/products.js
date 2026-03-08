import api from "../../services/api"

export default{

    namespaced:true,

    state(){
    return{
    products:[],
    loading:false,
    error:false
    }
    },

    mutations:{
    setProducts(state,data){
    state.products=data
    },
    setLoading(state,value){
    state.loading=value
    },
    setError(state,value){
    state.error=value
    }
    },

    actions:{
    async fetchProducts({commit}){
    commit("setLoading",true)
    try{
    const res=await api.get("/products")
    commit("setProducts",res.data)
    }catch{
    commit("setError",true)
    }
    commit("setLoading",false)
    }
    }
}