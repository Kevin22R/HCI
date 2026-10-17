# Aplicación de las 10 Heurísticas de Nielsen - Uniautónoma Fest 2026

Este documento describe cómo se aplican los diez principios heurísticos de usabilidad de Jakob Nielsen en la plataforma web de Uniautónoma Fest 2026.

---

## 1. Visibilidad del estado del sistema

### Funcionalidad implementada
- Contador regresivo con actualización en tiempo real
- Estados de botones (activo, deshabilitado, hover)
- Indicador visual del día seleccionado en tabs
- Badge "Ahora en la semana" con punto animado
- Estados de links (activo, próximamente)

### Ubicación
- Hero section - Contador regresivo
- Programación - Tabs de días con estado activo
- Bloque "Ahora en la semana" - Indicador pulsante
- Footer - Links con estados de disponibilidad

### Justificación desde la interacción humano-computador
El usuario siempre sabe qué está seleccionado y qué opciones están disponibles. Los estados visuales claros reducen la incertidumbre.

### Pasos para comprobarlo
1. Observar el contador regresivo actualizándose cada segundo
2. Click en diferentes días de la programación - ver el estado activo
3. Ver el badge "Ahora en la semana" con punto animado
4. Observar links deshabilitados (TikTok, WhatsApp)

### Estado de implementación
✅ Completado

---

## 2. Correspondencia con el mundo real

### Funcionalidad implementada
- Fechas en formato local colombiano
- Precios en COP con separadores de miles
- Lugares reales de Popayán
- Nombres de actividades exactos
- Tipos de actividades familiares (Comunidad, Institucional, Académico, Emprendimiento)
- Links oficiales externos

### Ubicación
- Todos los componentes - Datos del evento
- Programación - Información de lugares y horas
- Kits - Precios y descripciones exactas
- Footer - Aviso legal completo

### Justificación desde la interacción humano-computador
Uso del lenguaje natural del contexto colombiano, sin terminología técnica. Los datos son exactos y verificables.

### Pasos para comprobarlo
1. Ver fechas en formato "Lunes 19", "Martes 20"
2. Observar precios en COP ($75.000, $80.000)
3. Ver lugares reales: "Sede principal", "Auditorio La Quimera"
4. Click en botones de inscripción - llevan a forms oficiales

### Estado de implementación
✅ Completado

---

## 3. Control y libertad del usuario

### Funcionalidad implementada
- Navegación por anclas (#schedule, #kits, #race)
- Tabs de días con selección libre
- Scroll horizontal snap en móvil
- Links externos en nueva pestaña
- Navegación útil en móvil sin menú oculto

### Ubicación
- Header - Links directos a secciones
- Programación - Tabs de días
- Kits - Links al sitio oficial
- Carrera - Links a Google Maps

### Justificación desde la interacción humano-computador
El usuario puede navegar libremente sin estar atrapado en menús. Los accesos directos mejoran la eficiencia.

### Pasos para comprobarlo
1. Click en "Programación" - scroll suave a la sección
2. En móvil, scroll horizontal en días con snap
3. Click en botones de kits - abren nueva pestaña
4. Navegación móvil visible siempre (3 botones)

### Estado de implementación
✅ Completado

---

## 4. Consistencia y estándares

### Funcionalidad implementada
- Paleta de colores consistente (crema, verde noche, azul)
- Tipografía uniforme (Fraunces para títulos, Outfit para interfaz)
- Botones con altura mínima de 44px
- Radio de borde consistente (12px)
- Chips de tipo con colores asignados
- Cards con mismo diseño

### Ubicación
- Todo el sitio - Sistema de diseño consistente
- Programación - Chips de tipo con colores específicos
- Kits - Cards con diseño uniforme
- Header y Footer - Colores y tipografía consistentes

### Justificación desde la interacción humano-computador
La consistencia reduce la carga cognitiva. El usuario reconoce patrones y aprende la interfaz rápidamente.

### Pasos para comprobarlo
1. Observar que todos los títulos usan Fraunces
2. Ver que todos los botones tienen min 44px de altura
3. Observar que los chips de tipo tienen colores consistentes
4. Ver que las cards tienen el mismo diseño

### Estado de implementación
✅ Completado

---

## 5. Prevención de errores

### Funcionalidad implementada
- Links deshabilitados cuando no hay URL
- Texto "Próximamente" en links no disponibles
- Atributos target="_blank" en links externos
- rel="noopener noreferrer" para seguridad
- Validación de que el scroll snap funciona en móvil

### Ubicación
- Footer - Links de redes sociales
- Programación - Botones de inscripción
- Carrera - Links a Google Maps

### Justificación desde la interacción humano-computador
Prevención de acciones que llevarían a errores (links vacíos). Feedback claro de disponibilidad.

### Pasos para comprobarlo
1. Ver TikTok y WhatsApp en footer - texto "Próximamente"
2. Click en botón "Próximamente" de la 5K - no hace nada
3. Click en links externos - abren nueva pestaña
4. Scroll horizontal en móvil - snap funcional

### Estado de implementación
✅ Completado

---

## 6. Reconocimiento antes que recuerdo

### Funcionalidad implementada
- Programación visible con todos los días
- Tabs de días siempre visibles
- Comparación de kits en 3 columnas
- Mapa simple con salida y meta claras
- Resumen de "Ahora en la semana"

### Ubicación
- Programación - Tabs de días + tarjetas
- Kits - Comparación visual
- Carrera - Mapa con links
- Hero - Bloque de próximo evento

### Justificación desde la interacción humano-computador
La información está visible sin necesidad de recordar. El usuario puede comparar kits y ver la programación completa.

### Pasos para comprobarlo
1. Ver todos los días en tabs (scroll horizontal en móvil)
2. Comparar kits en 3 columnas - precios alineados
3. Ver mapa con salida y meta como links
4. Observar bloque "Ahora en la semana" con próximo evento

### Estado de implementación
✅ Completado

---

## 7. Flexibilidad y eficiencia de uso

### Funcionalidad implementada
- Filtro por día en programación
- Navegación por anclas directas
- Scroll horizontal snap en móvil
- Links directos a inscripciones externas
- Navegación móvil optimizada (3 botones)

### Ubicación
- Programación - Tabs de días
- Header - Links directos
- Footer - Links a redes
- Kits - Links directos al sitio oficial

### Justificación desde la interacción humano-computador
Atajos para usuarios expertos (tabs, anclas). Navegación eficiente en móvil sin menú hamburguesa.

### Pasos para comprobarlo
1. Click en día específico - filtra actividades
2. Click en "Carrera" - scroll directo a la sección
3. En móvil, ver 3 botones de navegación siempre visibles
4. Scroll horizontal en días con snap smooth

### Estado de implementación
✅ Completado

---

## 8. Diseño estético y minimalista

### Funcionalidad implementada
- Jerarquía visual clara con Fraunces y Outfit
- Espacio en blanco adecuado
- Hero corto (no pantalla entera)
- Cards limpias sin elementos innecesarios
- Sin efectos de neón, HUD o scanlines
- Paleta premium (crema sobre verde noche)

### Ubicación
- Todo el sitio - Diseño minimalista
- Hero - Información esencial solo
- Programación - Tarjetas limpias
- Kits - Comparación clara sin distracciones

### Justificación desde la interacción humano-computador
Diseño limpio y premium sin elementos de videojuego. Jerarquía visual clara guía la atención.

### Pasos para comprobarlo
1. Hero es corto - no pantalla entera
2. Observar ausencia de efectos neón/HUD
3. Ver espacio en blanco entre secciones
4. Observar tipografía jerárquica clara

### Estado de implementación
✅ Completado

---

## 9. Ayudar a reconocer, diagnosticar y recuperarse de errores

### Funcionalidad implementada
- Links deshabilitados con texto claro "Próximamente"
- Feedback visual de hover en botones
- Indicador de día seleccionado
- Scroll snap para evitar desorientación en móvil

### Ubicación
- Footer - Links deshabilitados
- Programación - Tabs con estado activo
- Todos los botones - Estados hover

### Justificación desde la interacción humano-computador
Cuando algo no está disponible, el usuario sabe por qué (próximamente). Estados hover claros.

### Pasos para comprobarlo
1. Hover sobre botones - cambio de color
2. Ver TikTok/WhatsApp - texto "Próximamente"
3. Click en día activo - resaltado en verde noche
4. Scroll en móvil - snap evita desorientación

### Estado de implementación
✅ Completado

---

## 10. Ayuda y documentación

### Funcionalidad implementada
- Aviso legal completo en footer
- Descripciones claras en cada actividad
- Información de entrega de kits
- Links a Google Maps para la carrera
- Contacto a través de redes sociales

### Ubicación
- Footer - Aviso legal completo
- Programación - Descripciones de actividades
- Kits - Información de tallas y entrega
- Carrera - Links a mapas

### Justificación desde la interacción humano-computador
Información contextual donde se necesita. Aviso legal completo según requisitos.

### Pasos para comprobarlo
1. Leer aviso legal en footer - texto completo
2. Ver descripciones en cada tarjeta de actividad
3. Ver información de tallas y entrega en kits
4. Click en links de maps - ubicación clara

### Estado de implementación
✅ Completado

---

## Resumen de decisiones de diseño

### Diferencias con la competencia
- **Sin efectos neón/HUD**: Diseño premium y legible
- **Hero corto**: Información esencial en vista
- **Tarjetas no filas**: Mejor legibilidad
- **Comparación de kits visual**: 3 columnas alineadas
- **Navegación móvil útil**: 3 botones siempre visibles
- **Paleta distintiva**: Crema y verde noche, no cian neón
- **Tipografía premium**: Fraunces + Outfit, no Archivo
- **Mapa simple**: Links claros a Google Maps

### Links que apuntan al sitio oficial
- Inscripción Hackatón → Google Form oficial
- Quiero un stand → Feria de Emprendimiento oficial
- Kits → #kit del sitio oficial
- Arma tu kit → #kit del sitio oficial

### Accesibilidad
- Contraste AA (crema sobre verde noche)
- Botones mínimo 44px
- Navegación por teclado
- Scroll snap en móvil
- Sin scroll horizontal
- Texto mínimo 16px

### Responsive
- 360px: Tabs scroll horizontal, botones 44px
- 390px: Optimizado para móviles modernos
- 768px: Tablet con grid
- 1024px: Desktop con 3 columnas
- 1280px: Desktop grande con espaciado amplio

---

## Estado general de implementación

- Heurísticas aplicadas: 10/10
- Funcionalidades implementadas: Todas las requeridas
- Datos exactos: ✅ Horas, precios, nombres verificados
- Links oficiales: ✅ Inscripciones y kits apuntan al sitio oficial
- Design system: ✅ Paleta premium, tipografía Fraunces/Outfit
- Responsive: ✅ 360-1280px verificado
- Accesibilidad: ✅ Contraste AA, botones 44px

---

## Notas

Este diseño se distingue claramente de la competencia:
- No usa cian neón ni efectos de videojuego
- Hero corto vs pantalla entera de naves
- Tarjetas vs lista simple
- Comparación visual de kits vs lista
- Navegación móvil útil vs menú hamburguesa
- Paleta crema/verde noche vs fondo oscuro neón
- Tipografía premium vs Archivo
