<template>
  <div
    class="tx-bg-gray-100 tx-min-h-screen tx-flex tx-items-center tx-justify-center tx-px-4 w-full"
  >
    <div class="tx-bg-white tx-p-8 tx-rounded-lg tx-shadow-lg tx-w-full tx-max-w-2xl">
      <!-- Título y descripción -->
      <h1 class="tx-text-3xl tx-font-bold tx-text-center tx-text-blue-800 tx-mb-4">
        Cotizador Rápido de Vende tu Auto
      </h1>
      <p class="tx-text-gray-700 tx-text-center tx-mb-4">
        Donde podrás generar ofertas de compra en minutos. Comienza por seleccionar la marca del
        vehículo. Si no aparece en el listado, puedes escribirla. Llena todos los campos para
        continuar.
      </p>

      <!-- Formulario -->
      <form
        @submit.prevent="handleSubmit"
        class="tx-grid tx-grid-cols-1 md:tx-grid-cols-2 tx-gap-4"
      >
        <!-- Marca -->
        <div>
          <label for="marca" class="tx-block tx-font-medium tx-text-gray-700 tx-mb-1">Marca</label>
          <input
            id="marca"
            v-model="formData.marca"
            type="text"
            placeholder="Ingresa la marca"
            class="tx-w-full tx-p-2 tx-border tx-rounded-md focus:tx-outline-none focus:tx-ring focus:tx-ring-blue-300"
            required
          />
        </div>

        <!-- Modelo -->
        <div>
          <label for="modelo" class="tx-block tx-font-medium tx-text-gray-700 tx-mb-1"
            >Modelo</label
          >
          <input
            id="modelo"
            v-model="formData.modelo"
            type="text"
            placeholder="Ingresa el modelo"
            class="tx-w-full tx-p-2 tx-border tx-rounded-md focus:tx-outline-none focus:tx-ring focus:tx-ring-blue-300"
            required
          />
        </div>

        <!-- Año -->
        <div>
          <label for="anio" class="tx-block tx-font-medium tx-text-gray-700 tx-mb-1">Año</label>
          <input
            id="anio"
            v-model="formData.anio"
            type="number"
            placeholder="Ingresa el año"
            class="tx-w-full tx-p-2 tx-border tx-rounded-md focus:tx-outline-none focus:tx-ring focus:tx-ring-blue-300"
            required
          />
        </div>

        <!-- Kilometraje -->
        <div>
          <label for="kilometraje" class="tx-block tx-font-medium tx-text-gray-700 tx-mb-1">
            Kilometraje
          </label>
          <input
            id="kilometraje"
            v-model="formData.kilometraje"
            type="number"
            placeholder="Ingresa el kilometraje"
            class="tx-w-full tx-p-2 tx-border tx-rounded-md focus:tx-outline-none focus:tx-ring focus:tx-ring-blue-300"
            required
          />
        </div>

        <!-- Versión -->
        <div>
          <label for="version" class="tx-block tx-font-medium tx-text-gray-700 tx-mb-1"
            >Versión</label
          >
          <input
            id="version"
            v-model="formData.version"
            type="text"
            placeholder="Ingresa la versión"
            class="tx-w-full tx-p-2 tx-border tx-rounded-md focus:tx-outline-none focus:tx-ring focus:tx-ring-blue-300"
            required
          />
        </div>

        <!-- Color -->
        <div>
          <label for="color" class="tx-block tx-font-medium tx-text-gray-700 tx-mb-1">Color</label>
          <input
            id="color"
            v-model="formData.color"
            type="text"
            placeholder="Ingresa el color"
            class="tx-w-full tx-p-2 tx-border tx-rounded-md focus:tx-outline-none focus:tx-ring focus:tx-ring-blue-300"
            required
          />
        </div>

        <!-- Precio estimado -->
        <div class="md:tx-col-span-2">
          <label for="precio" class="tx-block tx-font-medium tx-text-gray-700 tx-mb-1">
            Precio Estimado
          </label>
          <input
            id="precio"
            v-model="formData.precio"
            type="number"
            placeholder="Ingresa el precio estimado"
            class="tx-w-full tx-p-2 tx-border tx-rounded-md focus:tx-outline-none focus:tx-ring focus:tx-ring-blue-300"
            required
          />
        </div>

        <!-- Botón de enviar -->
        <div class="md:tx-col-span-2">
          <button
            type="submit"
            style="
              background-color: #1e40af;
              color: #ffffff;
              padding: 0.5rem;
              border-radius: 0.375rem;
            "
            class="tx-w-full hover:tx-bg-blue-600 focus:tx-outline-none focus:tx-ring focus:tx-ring-blue-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        marca: '',
        modelo: '',
        anio: '',
        kilometraje: '',
        version: '',
        color: '',
        precio: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      console.log('Datos del formulario:', this.formData)
      alert('Formulario enviado con éxito!')
    },
  },
}
</script>
