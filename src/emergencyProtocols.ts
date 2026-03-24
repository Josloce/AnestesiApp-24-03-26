/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EmergencyStep {
  id: string;
  title: string;
  description: string;
  isCritical?: boolean;
}

export interface EmergencyProtocol {
  id: string;
  name: string;
  icon: string;
  description: string;
  steps: EmergencyStep[];
  medications?: {
    name: string;
    dose: string;
    notes: string;
  }[];
}

export const EMERGENCY_PROTOCOLS: EmergencyProtocol[] = [
  {
    id: 'malignant-hyperthermia',
    name: 'Hipertermia Maligna',
    icon: 'Thermometer',
    description: 'Crisis farmacogenética desencadenada por halogenados o succinilcolina.',
    steps: [
      { id: 'mh-1', title: 'Pedir Ayuda', description: 'Declarar emergencia, pedir carro de paro y Dantroleno.', isCritical: true },
      { id: 'mh-2', title: 'Suspender Gatillos', description: 'Cerrar vaporizadores, cambiar cal sodada si es posible, hiperventilar con O2 100% a 10L/min.' },
      { id: 'mh-3', title: 'Dantroleno', description: 'Dosis inicial: 2.5 mg/kg IV rápido. Repetir hasta control de síntomas (hasta 10 mg/kg).', isCritical: true },
      { id: 'mh-4', title: 'Enfriamiento', description: 'Lavado gástrico/vesical con solución fría. Hielo en axilas e ingle. Suspender al llegar a 38°C.' },
      { id: 'mh-5', title: 'Tratar Arritmias', description: 'Evitar bloqueadores de canales de calcio. Usar Amiodarona o Lidocaína si es necesario.' },
      { id: 'mh-6', title: 'Tratar Hiperkalemia', description: 'Insulina/Glucosa, Bicarbonato de Sodio, Gluconato de Calcio.' }
    ],
    medications: [
      { name: 'Dantroleno', dose: '2.5 mg/kg IV', notes: 'Diluir cada vial de 20mg en 60ml de agua estéril.' },
      { name: 'Bicarbonato Na', dose: '1-2 mEq/kg', notes: 'Para acidosis metabólica y protección renal.' }
    ]
  },
  {
    id: 'last-toxicity',
    name: 'Toxicidad por Anestésicos Locales (LAST)',
    icon: 'Zap',
    description: 'Inyección intravascular accidental o absorción sistémica excesiva.',
    steps: [
      { id: 'last-1', title: 'Vía Aérea', description: 'Asegurar oxigenación. Evitar hipercapnia (empeora toxicidad).', isCritical: true },
      { id: 'last-2', title: 'Control de Convulsiones', description: 'Benzodiacepinas (Midazolam). Evitar Propofol si hay inestabilidad hemodinámica.' },
      { id: 'last-3', title: 'Emulsión de Lípidos 20%', description: 'Bolo inicial 1.5 ml/kg seguido de infusión 0.25 ml/kg/min.', isCritical: true },
      { id: 'last-4', title: 'Soporte Circulatorio', description: 'Evitar Vasopresina. Dosis bajas de Adrenalina (< 1 mcg/kg). Evitar bloqueadores de canales de calcio.' }
    ],
    medications: [
      { name: 'Lípidos 20%', dose: '1.5 ml/kg Bolo', notes: 'Seguir con infusión de 0.25 ml/kg/min por al menos 10 min tras estabilidad.' },
      { name: 'Adrenalina', dose: 'Dosis bajas', notes: 'Evitar dosis altas; pueden comprometer la reanimación lipídica.' }
    ]
  },
  {
    id: 'difficult-airway',
    name: 'Vía Aérea Difícil',
    icon: 'Wind',
    description: 'Algoritmo simplificado de la ASA para el manejo de la vía aérea.',
    steps: [
      { id: 'da-1', title: 'Plan A: Intubación', description: 'Optimizar posición, laringoscopia directa o video. Máximo 3 intentos.' },
      { id: 'da-2', title: 'Plan B: Dispositivo Supraglótico', description: 'Insertar máscara laríngea si falla la intubación.' },
      { id: 'da-3', title: 'Plan C: Ventilación con Máscara', description: 'Asegurar oxigenación. Pedir ayuda adicional.' },
      { id: 'da-4', title: 'Plan D: Vía Aérea Quirúrgica', description: 'Cricotiroidotomía de emergencia si no se puede ventilar ni intubar.', isCritical: true }
    ]
  },
  {
    id: 'acls-arrest',
    name: 'Paro Cardiorrespiratorio (ACLS)',
    icon: 'HeartPulse',
    description: 'Protocolo de reanimación avanzada intraoperatoria.',
    steps: [
      { id: 'acls-1', title: 'RCP de Alta Calidad', description: 'Compresiones 100-120/min. Profundidad 5-6 cm. Minimizar interrupciones.', isCritical: true },
      { id: 'acls-2', title: 'Ritmo Desfibrilable?', description: 'FV/TVSP: Descarga 200J. Asistolia/AESP: Adrenalina inmediata.' },
      { id: 'acls-3', title: 'Adrenalina', description: '1 mg cada 3-5 minutos.' },
      { id: 'acls-4', title: 'Antiarrítmicos', description: 'Amiodarona 300mg (1er bolo) o Lidocaína 1-1.5 mg/kg.' },
      { id: 'acls-5', title: 'Causas Reversibles (H/T)', description: 'Hipovolemia, Hipoxia, Hidrogeniones, Hipo/Hiperkalemia, Hipotermia, Neumotórax a Tensión, Taponamiento, Tóxicos, Trombosis.' }
    ],
    medications: [
      { name: 'Adrenalina', dose: '1 mg IV', notes: 'Cada 3-5 minutos.' },
      { name: 'Amiodarona', dose: '300 mg Bolo', notes: 'Segunda dosis de 150 mg si persiste FV/TVSP.' }
    ]
  }
];
