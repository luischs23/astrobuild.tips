module.exports = {
    semi:true,
    singleQuote:false,
    tabWidth: 2,        // Cantidad de Width en los tab maximo 2
    useTabs:true,
    plugins:[
        require("prettier-plugin-astro")
    ],
    overrides:[         // Escrituras que debemos trabajar
        {
            files: "**/*astro",      // Archivos para que los pueda entender
            options:{
                parser:"astro"      // Analizador
            },
        },
    ],
};