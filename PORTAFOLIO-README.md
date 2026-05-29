# 🚀 Portafolio Profesional - Desarrollador Full Stack & Móvil

Un portafolio web moderno, elegante y completamente responsivo diseñado para desarrolladores full stack y especialistas en desarrollo móvil híbrido.

## ✨ Características

- **🎨 Diseño Moderno**: Interface minimalista con paleta de colores neutros y acentos vibrantes
- **📱 Completamente Responsivo**: Optimizado para desktop, tablet y móvil
- **🌐 Multiidioma**: Soporte para español e inglés con cambio fluido
- **⚡ Performance Optimizada**: Carga rápida con lazy loading y optimizaciones
- **🎭 Animaciones Suaves**: Efectos de scroll y transiciones elegantes
- **📄 CV Descargable**: Archivo PDF optimizado para ATS
- **🔧 Fácil Personalización**: Componentes modulares bien documentados

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework estático moderno
- **Tailwind CSS** - Framework de CSS utilitario
- **Phosphor Icons** - Librería de iconos moderna
- **Vanilla JavaScript** - Funcionalidad interactiva
- **PDF** - Documento de CV descargable

## 🚀 Instalación y Configuración

### 1. Instalar Dependencias

```bash
# Usando npm
npm install

# Usando yarn
yarn install
```

### 2. Ejecutar en Desarrollo

```bash
# Usando npm
npm run dev

# Usando yarn
yarn dev
```

### 3. Build para Producción

```bash
# Usando npm
npm run build

# Usando yarn
yarn build
```

## 📝 Guía de Personalización

### 🎯 Información Personal

#### Header y Logo
**Archivo**: `src/components/Header.astro`
- Línea 8: Cambiar iniciales en el logo (`DS` por tus iniciales)
- Línea 9: Cambiar nombre/marca (`Dev Studio` por tu nombre)

#### Hero Section
**Archivo**: `src/components/Hero.astro`
- Línea 23: Cambiar `[Tu Nombre]` por tu nombre real
- Líneas 44-47: Actualizar estadísticas (años de experiencia, proyectos, etc.)
- Líneas 58-73: Personalizar botones de redes sociales con tus URLs

#### About Section
**Archivo**: `src/components/About.astro`
- Líneas 65-75: Actualizar información personal (ubicación, experiencia)
- Líneas 82-95: Personalizar tu historia y biografía
- Líneas 103-125: Ajustar tus pasiones y enfoque

### 💼 Experiencia Profesional

**Archivo**: `src/components/Experience.astro`

Para cada experiencia (hay 3 ejemplos):
1. **Fecha**: Actualizar el período de trabajo
2. **Puesto**: Cambiar el título del trabajo
3. **Empresa**: Nombre de la empresa
4. **Descripción**: Personalizar responsabilidades y logros
5. **Tecnologías**: Actualizar las tecnologías utilizadas

```astro
<!-- Ejemplo de personalización -->
<div class="text-sm text-blue-600 font-semibold mb-2">
  <span data-es="2023 - Presente" data-en="2023 - Present">2023 - Presente</span>
</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">
  Tu Puesto Actual
</h3>
<div class="text-lg text-gray-700 mb-4 font-medium">Tu Empresa Actual</div>
```

### 🚀 Proyectos

**Archivo**: `src/components/Projects.astro`

Hay 6 proyectos de ejemplo. Para personalizar cada uno:

1. **data-category**: Categoría del proyecto (`web`, `mobile`, `fullstack`)
2. **Icono**: Cambiar el icono de Phosphor
3. **Título**: Nombre del proyecto
4. **Descripción**: Explicación del proyecto
5. **Tecnologías**: Tags de tecnologías utilizadas
6. **Enlaces**: URLs a demo y repositorio
7. **Métricas**: Estadísticas del proyecto

```astro
<!-- Ejemplo de proyecto personalizado -->
<div class="project-card group" data-category="web" data-aos="fade-up">
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div class="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100">
      <div class="absolute inset-0 flex items-center justify-center">
        <i class="ph ph-tu-icono text-6xl text-primary-600"></i>
      </div>
      <!-- Enlaces de acción -->
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div class="flex space-x-4">
          <a href="https://tu-demo.com" class="project-btn">
            <i class="ph ph-eye"></i>
            <span data-es="Demo" data-en="Demo">Demo</span>
          </a>
          <a href="https://github.com/tu-repo" class="project-btn">
            <i class="ph ph-github-logo"></i>
            <span data-es="Código" data-en="Code">Código</span>
          </a>
        </div>
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-3">
        Tu Proyecto Increíble
      </h3>
      <p class="text-gray-600 mb-4 leading-relaxed">
        Descripción detallada de tu proyecto...
      </p>
      
      <!-- Tecnologías -->
      <div class="flex flex-wrap gap-2 mb-4">
        <Badge type="react" title="React" />
        <Badge type="nodejs" title="Node.js" />
        <!-- Agregar más tecnologías -->
      </div>
      
      <!-- Métricas -->
      <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
        <div class="text-center">
          <div class="font-bold text-primary-600">1000+</div>
          <div class="text-xs text-gray-500">Usuarios</div>
        </div>
        <div class="text-center">
          <div class="font-bold text-secondary-600">5⭐</div>
          <div class="text-xs text-gray-500">Rating</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 🛠️ Habilidades

**Archivo**: `src/components/Skills.astro`

Las habilidades están organizadas en categorías:
- Frontend Development
- Backend Development  
- Mobile Development
- Databases & Cloud
- Tools & DevOps

Para personalizar:
1. **Nombre**: Cambiar el nombre de la tecnología
2. **Icono**: Usar iconos de Phosphor apropiados
3. **Porcentaje**: Ajustar el nivel de habilidad (style="width: 95%")
4. **Color**: Cambiar los colores de fondo y progreso

```astro
<!-- Ejemplo de habilidad personalizada -->
<div class="skill-card group">
  <div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
    <i class="ph ph-atom text-2xl text-primary-600"></i>
  </div>
  <h4 class="font-semibold text-gray-900 mb-2">React</h4>
  <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
    <div class="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style="width: 95%"></div>
  </div>
  <span class="text-sm text-gray-600">95%</span>
</div>
```

### 📞 Información de Contacto

**Archivo**: `src/components/Footer.astro`

- **Email**: Línea 50 - Cambiar `tu@email.com`
- **Teléfono**: Línea 62 - Actualizar número
- **Ubicación**: Línea 76 - Tu ciudad y país
- **Redes Sociales**: Líneas 234-254 - URLs de tus perfiles
- **Links del CV**: Línea 95 - Verificar la ruta del PDF

### 📄 CV Descargable

**Archivo**: `public/cv-desarrollador-fullstack.pdf`

1. Crear tu CV en formato PDF optimizado para ATS
2. Reemplazar el archivo placeholder
3. Asegurarte de que el nombre del archivo coincida con los enlaces

### 🎨 Personalización de Colores

Los colores principales están definidos en Tailwind CSS:
- **Primario (Naranja)**: `primary-600` (#fe4b00)
- **Secundario (Amarillo)**: `secondary-600` (#ffb700)
- **Charcoal (Gris carbón)**: `charcoal-600` (#ffffff / #313131)

Para cambiar la paleta de colores, buscar y reemplazar estas clases en todos los archivos.

### 🌐 Configuración de Idiomas

El sistema de idiomas funciona con atributos `data-es` y `data-en`:

```html
<span data-es="Texto en español" data-en="English text">Texto en español</span>
```

Para agregar nuevos textos:
1. Agregar ambos atributos al elemento
2. El texto inicial será el valor por defecto (español)
3. El JavaScript automáticamente cambiará el contenido

### 🔧 Configuración SEO

**Archivo**: `src/layouts/Layout.astro`

- **Título**: Línea 9 - Meta título principal
- **Descripción**: Línea 10 - Meta descripción
- **Keywords**: Línea 25 - Palabras clave relevantes
- **Open Graph**: Líneas 29-33 - Para redes sociales
- **Schema.org**: Líneas 50-75 - Datos estructurados

### 📱 PWA (Progressive Web App)

Para convertir en PWA:
1. Crear `public/manifest.json`
2. Agregar `public/sw.js` (Service Worker)
3. Configurar iconos en diferentes tamaños
4. Habilitar el botón de instalación (línea 261 en index.astro)

## 🎯 Checklist de Personalización

### ✅ Información Básica
- [ ] Nombre y título profesional
- [ ] Foto de perfil profesional
- [ ] Información de contacto
- [ ] Enlaces a redes sociales
- [ ] Ubicación geográfica

### ✅ Contenido Profesional
- [ ] Biografía personalizada
- [ ] Experiencia laboral actualizada
- [ ] Proyectos reales con enlaces
- [ ] Habilidades y niveles precisos
- [ ] CV actualizado y optimizado

### ✅ Branding y Diseño
- [ ] Logo/iniciales personalizadas
- [ ] Paleta de colores (opcional)
- [ ] Iconos apropiados para proyectos
- [ ] Imágenes de alta calidad

### ✅ SEO y Metadata
- [ ] Título y descripción únicos
- [ ] Keywords relevantes
- [ ] Open Graph configurado
- [ ] Datos estructurados

### ✅ Funcionalidad
- [ ] Enlaces funcionales a proyectos
- [ ] Formulario de contacto configurado
- [ ] CV descargable funcionando
- [ ] Responsive design verificado

## 🚀 Deployment

### Netlify
1. Conectar repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Importar proyecto
2. Framework preset: Astro
3. Deploy

### GitHub Pages
1. Configurar GitHub Actions
2. Usar workflow de Astro
3. Configurar dominio personalizado

## 🤝 Contribuciones

Si encuentras bugs o tienes ideas de mejora:
1. Fork el repositorio
2. Crea una branch para tu feature
3. Commit tus cambios
4. Push a la branch
5. Abre un Pull Request

## 📞 Soporte

¿Necesitas ayuda con la personalización? 
- Revisa la documentación de [Astro](https://docs.astro.build)
- Consulta [Tailwind CSS](https://tailwindcss.com/docs)
- Explora [Phosphor Icons](https://phosphoricons.com/)

---

**¡Hecho con ❤️ y mucho café!** ☕

*Recuerda reemplazar todos los placeholders `[Tu Nombre]`, `tu@email.com`, URLs, etc. con tu información real.*