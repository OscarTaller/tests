
**1. Sistema de Diseño y Componentes Base (UI Kit)**

- "¿En qué archivos o clases centralizáis la paleta de colores de la aplicación (ej. `colors.xml` o el tema principal de Compose)?"
    
- "¿Dónde definís los estilos globales o los modificadores base para gestionar el estado de los elementos cuando reciben el foco nativo del teclado?"
    
- "¿Cuál es el componente o archivo base que construye los campos de texto (`EditText` o `TextField`) utilizados en los formularios?"
    
- "¿Dónde están definidos los componentes reutilizables de los _checkboxes_ y _switches_ y cómo están agrupados internamente respecto a sus textos explicativos?"
    
- "¿En qué archivo exacto tenéis encapsulado el componente interactivo del deslizador (_slider_) que usáis en pantallas como 'Simular préstamo'?"
    

**2. Navegación y Estructura**

- "¿Qué archivo o componente global se encarga de renderizar la cabecera superior (Top Bar) en todas las pantallas?"
    
- "¿Dónde reside la estructura del menú de navegación y las pestañas principales (ej. el `SlidingTabLayout` o el componente equivalente de Compose)?"
    
- "¿Tenéis una clase base o un componente de texto estándar desde el cual generáis todos los títulos de sección de las diferentes pantallas?"
    
- "¿Qué clase, gestor o _wrapper_ utilizáis para controlar el despliegue de los _Bottom Sheets_ y las ventanas emergentes (pop-ups) en la aplicación?"
    

**3. Eventos Dinámicos y Configuración**

- "¿Existe alguna clase de utilería, manejador de estado o gestor global desde donde centralicéis los avisos dinámicos que muestra el sistema al usuario?"
    
- "¿En qué parte exacta de la configuración (ej. `AndroidManifest.xml`) estáis definiendo el comportamiento de la orientación de la pantalla?"
    
- "¿Dónde reside la lógica o el servicio que gestiona el temporizador de inactividad de la sesión del usuario?"
    

---

### Equipo iOS (Swift / SwiftUI / UIKit)

**1. Sistema de Diseño y Componentes Base (UI Kit)**

- "¿Dónde tenéis centralizado el _Asset Catalog_ o las extensiones de `Color` que definen la paleta principal de la aplicación?"
    
- "¿En qué parte del proyecto configuráis los estilos globales para los bordes de foco cuando se navega con accesorios externos?"
    
- "¿Cuál es la vista base o el componente reutilizable que construye los `TextField` de los formularios de entrada de datos?"
    
- "¿En qué vista definís los componentes tipo `Toggle` o los grupos de _checkboxes_, y cómo se estructuran jerárquicamente junto a sus textos adyacentes?"
    
- "¿Dónde están programados los componentes de tipo acordeón o desplegables, como los que se usan en la sección de 'Depósito' o 'Perfil'?"
    

**2. Navegación y Estructura**

- "¿Qué vista actúa como `NavigationBar` global o controla la barra de navegación transversal en la aplicación?"
    
- "¿Dónde centralizáis los modificadores de texto o las vistas base que utilizáis para renderizar los títulos principales de cada sección?"
    
- "¿Cómo está estructurada la gestión de las ventanas emergentes, las alertas y los `.sheet` en vuestra arquitectura? ¿Hay algún gestor unificado para invocarlos?"
    

**3. Eventos Dinámicos y Configuración**

- "¿Qué clase o `ViewModel` controla los cambios de estado globales que requieren notificar al usuario (como pantallas de carga, cambios de pasos o contadores)?"
    
- "¿Dónde se configura el bloqueo o permiso de rotación de la pantalla? ¿Está en el `Info.plist`, en el `AppDelegate` o en el `SceneDelegate`?"
    
- "¿Qué servicio interno maneja el cierre de sesión por tiempo de inactividad?"