### Equipo Android (Kotlin, Android Studio, XML / Jetpack Compose)

**1. Sistema de Diseño y Componentes Base (UI Kit)**

- **Colores y Estilos:** "¿Dónde se encuentra vuestro archivo `colors.xml` (o la definición del `MaterialTheme` si usáis Compose) para ajustar los códigos hexadecimales del color naranja y los verdes que fallan en el contraste mínimo de 4.5:1?". "¿Y dónde centralizamos el archivo `drawable` (ej. `focus_square_selector.xml`) para aplicar el resaltado visual del foco del teclado a toda la app?".
    
- **Inputs y Autocompletado:** "¿En qué archivo construís el componente base para los campos de texto (`EditText` o `TextField`)? Necesito saberlo para inyectar dinámicamente los `autofillHints` en pantallas como Login y Registro, y para añadir textos de soporte (ej. 'campo obligatorio') a las etiquetas".
    
- **Agrupación de Switches/Checkboxes:** "¿Qué clase o función composable construye los `Row` o `LinearLayout` de los checkboxes y switches (ej. 'Gestionar comunicaciones')? Tenemos que agrupar el texto y el control en el mismo contenedor padre e implementar `Modifier.toggleable`".
    
- **Deslizador (Slider):** "¿Dónde tenéis encapsulado el `Slider` para 'Simular préstamo' y 'Límite en cajeros'? El orden de foco está invertido y hay que reestructurar su árbol en Compose para que el lector lea primero el mínimo, luego el control interactivo y luego el máximo".
    

**2. Navegación y Estructura (Jerarquía y Foco)**

- **Top Bar y Menús:** "¿Qué componente renderiza la Top Bar global para añadirle el `contentDescription` al logotipo y al botón 'Inicio'?". "¿Dónde reside el `SlidingTabLayout` o el menú de navegación inferior para inyectarle un `AccessibilityDelegate` que defina la relación padre-hijo de la lista?".
    
- **Encabezados:** "¿Qué componente de texto base usáis para los títulos de sección? Necesitamos inyectarles `android:accessibilityHeading="true"` o `Modifier.semantics { heading() }` de forma transversal".
    
- **Gestión de Modales (Trampas de foco):** "¿Qué clase envoltorio gestiona los _Bottom Sheets_ y pop-ups (ej. 'Operativas' o 'Mis documentos')? Necesito que apliquemos `FocusRequester` (Compose) o `accessibilityTraversalAfter` (XML) para mover el foco adentro al abrirse y devolverlo al botón de origen al cerrarse".
    

**3. Avisos Dinámicos y Sesión**

- **Anuncios del Sistema:** "¿Tenéis alguna clase de utilería o gestor global para lanzar avisos con `liveRegion` o `announceForAccessibility`? Hay que notificar a los usuarios cuando aparece la pantalla de carga, un pop-up de confirmación, o cuando inicia el contador de 5 minutos del código de seguridad".
    
- **Orientación:** "¿En qué parte exacta del `AndroidManifest.xml` tenéis forzado el `screenOrientation="portrait"` para retirarlo?".
    

---

### Equipo iOS (Swift, Xcode, SwiftUI / UIKit)

**1. Sistema de Diseño y Componentes Base (UI Kit)**

- **Colores y Estilos:** "¿Dónde tenéis centralizado el _Asset Catalog_ o las extensiones de `Color` en SwiftUI para modificar los tonos verde y naranja que fallan en el contraste?". "¿Dónde aplicamos globalmente el borde del foco del teclado para los usuarios que navegan con teclados externos?".
    
- **Inputs y Autocompletado:** "¿Cuál es la vista base que construye los `TextField` de la app? Hay que acceder a ella para inyectar `.textContentType` para habilitar el autocompletado en el Login y Registro, y para añadir el `.accessibilityLabel` con aclaraciones como 'Netos mensuales'".
    
- **Agrupación de Controles:** "¿En qué vista definís los `Toggle` o `HStack` para las pantallas de comunicaciones y legales? Hay que agrupar semánticamente el control interactivo y su texto explicativo para que VoiceOver los lea juntos".
    
- **Estados y Desplegables:** "¿Dónde están los componentes de los acordeones de 'Depósito Cetelem' o las opciones de 'Perfil'? Hay que añadirles la propiedad `.accessibilityValue` para que informen si están 'Seleccionados', 'Completados' o 'Desplegados'".
    

**2. Navegación y Estructura (Jerarquía y Foco)**

- **Navegación y Cabeceras:** "¿Qué vista actúa como `NavigationBar` global para poder sustituir el texto visual del botón volver por un `.accessibilityLabel` que diga 'Volver a la página de inicio'?". "¿Y para añadirle la cantidad de notificaciones pendientes al icono de la campana de forma oculta?".
    
- **Encabezados:** "¿Dónde centralizáis los modificadores de texto para los títulos principales para aplicar el `.accessibilityRole(.header)` de forma estandarizada en pantallas como 'Datos del titular'?".
    
- **Gestión de Modales (.sheet / .alert):** "¿Cómo gestionáis la apertura de los `.sheet` o pop-ups (ej. en 'Operativas' o 'Detalles de movimientos')? Necesitamos usar `@FocusState` para asegurar que VoiceOver mueva el foco dentro del modal al abrirlo y no se quede leyendo el contenido del fondo".
    

**3. Avisos Dinámicos y Sesión**

- **Anuncios del Sistema (VoiceOver):** "¿Qué clase o ViewModel controla los cambios de estado globales (loaders, temporizadores)? Tenemos que inyectar `UIAccessibility.post(notification: .announcement, argument: ...)` para avisar de pantallas de carga, cambios de pasos en domiciliaciones o el temporizador del código PIN".
    
- **Orientación:** "¿Está la orientación bloqueada desde el `Info.plist` o a través del `AppDelegate` / `SceneDelegate`? Debemos permitir que la app rote".