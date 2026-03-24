/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Regimen {
  effect: string;
  minDose: number;
  maxDose: number;
  ed50?: number;
  ed95?: number;
  unit: 'mg/kg' | 'mcg/kg' | 'mg/kg/h' | 'mcg/kg/min' | 'mcg/kg/h' | 'mg' | 'mcg';
}

export interface SystemEffects {
  cardiovascular: string;
  respiratory: string;
  cns: string;
  other?: string;
}

export interface Medication {
  id: string;
  name: string;
  description: string;
  mechanismOfAction: string;
  regimens: Regimen[];
  systemEffects: SystemEffects;
  contraindications: string[];
  halfLife: string;
  latency: string;
  duration: string;
  metabolism: string;
  receptors: string;
  elimination: string;
}

export const MEDICATIONS: Medication[] = [
  {
    id: 'propofol',
    name: 'Propofol',
    description: 'Agente anestésico intravenoso de acción corta.',
    mechanismOfAction: 'Facilitación de la neurotransmisión inhibitoria mediada por el receptor GABA-A.',
    regimens: [
      { effect: 'Inducción', minDose: 1.5, maxDose: 2.5, ed50: 1.1, ed95: 1.5, unit: 'mg/kg' },
      { effect: 'Mantenimiento (TIVA)', minDose: 4, maxDose: 12, unit: 'mg/kg/h' },
      { effect: 'Sedación Consciente', minDose: 0.5, maxDose: 1.0, unit: 'mg/kg' }
    ],
    systemEffects: {
      cardiovascular: 'Disminución de la resistencia vascular sistémica y contractilidad (hipotensión).',
      respiratory: 'Depresión respiratoria profunda, apnea, disminución de reflejos de vía aérea.',
      cns: 'Hipnosis, disminución del flujo sanguíneo cerebral y consumo de O2, anticonvulsivante.',
      other: 'Efecto antiemético, dolor a la inyección.'
    },
    contraindications: ['Hipersensibilidad al propofol, huevo o soja', 'Inestabilidad hemodinámica severa'],
    halfLife: '30 - 60 min (fase inicial)',
    latency: '30 - 45 segundos',
    duration: '5 - 10 minutos',
    metabolism: 'Hepático (rápido) y extrahepático (pulmones).',
    receptors: 'GABA-A',
    elimination: 'Renal'
  },
  {
    id: 'fentanyl',
    name: 'Fentanilo',
    description: 'Opioide sintético potente.',
    mechanismOfAction: 'Agonista selectivo de los receptores opioides mu (µ), produciendo analgesia y sedación.',
    regimens: [
      { effect: 'Inducción / Analgesia', minDose: 1, maxDose: 5, ed50: 1, ed95: 3, unit: 'mcg/kg' },
      { effect: 'Mantenimiento (Bolus)', minDose: 1, maxDose: 3, unit: 'mcg/kg' },
      { effect: 'Sedación en UCI', minDose: 0.7, maxDose: 10, unit: 'mcg/kg/h' }
    ],
    systemEffects: {
      cardiovascular: 'Bradicardia (vagal), estabilidad hemodinámica relativa.',
      respiratory: 'Depresión respiratoria dosis-dependiente, rigidez torácica (dosis altas).',
      cns: 'Analgesia potente, sedación, miosis, euforia/disforia.',
      other: 'Prurito, náuseas, vómitos, estreñimiento.'
    },
    contraindications: ['Hipersensibilidad a opioides', 'Depresión respiratoria severa no tratada'],
    halfLife: '3 - 4 horas',
    latency: '1 - 2 minutos',
    duration: '30 - 60 minutos',
    metabolism: 'Hepático (CYP3A4).',
    receptors: 'Opioides Mu (µ)',
    elimination: 'Renal'
  },
  {
    id: 'lidocaine',
    name: 'Lidocaína',
    description: 'Anestésico local tipo amida y antiarrítmico clase Ib.',
    mechanismOfAction: 'Bloqueo de los canales de sodio dependientes de voltaje en la membrana neuronal.',
    regimens: [
      { effect: 'Anestesia Local / Infiltración', minDose: 3, maxDose: 5, unit: 'mg/kg' },
      { effect: 'Con Epinefrina', minDose: 5, maxDose: 7, unit: 'mg/kg' },
      { effect: 'Antiarrítmico (Bolo)', minDose: 1, maxDose: 1.5, unit: 'mg/kg' },
      { effect: 'Atenuación Respuesta Presora', minDose: 1, maxDose: 1.5, unit: 'mg/kg' }
    ],
    systemEffects: {
      cardiovascular: 'Depresión de la automaticidad y contractilidad (dosis altas), hipotensión.',
      respiratory: 'Broncodilatación (dosis bajas), apnea (toxicidad).',
      cns: 'Analgesia, sedación; toxicidad: sabor metálico, tinnitus, convulsiones.',
      other: 'Toxicidad sistémica por anestésicos locales (LAST).'
    },
    contraindications: ['Hipersensibilidad a amidas', 'Bloqueo cardíaco de alto grado', 'Sindrome de Stokes-Adams'],
    halfLife: '1.5 - 2 horas',
    latency: '45 - 90 segundos (IV), 2-5 min (Infiltración)',
    duration: '30 - 60 minutos (IV), 1-2 horas (Infiltración)',
    metabolism: 'Hepático (CYP1A2, CYP3A4).',
    receptors: 'Canales de Na+ dependientes de voltaje',
    elimination: 'Renal'
  },
  {
    id: 'bupivacaine',
    name: 'Bupivacaína',
    description: 'Anestésico local tipo amida de larga duración.',
    mechanismOfAction: 'Bloqueo de la conducción nerviosa al inhibir el flujo de sodio.',
    regimens: [
      { effect: 'Infiltración', minDose: 1, maxDose: 2, unit: 'mg/kg' },
      { effect: 'Bloqueo Epidural', minDose: 0.5, maxDose: 1.5, unit: 'mg/kg' },
      { effect: 'Raquídea (Dosis fija)', minDose: 5, maxDose: 15, unit: 'mg' }
    ],
    systemEffects: {
      cardiovascular: 'Cardiotoxicidad marcada (bloqueo canales Na+ cardíacos), arritmias ventriculares.',
      respiratory: 'Mínimo efecto a dosis terapéuticas.',
      cns: 'Toxicidad similar a lidocaína pero con menor margen de seguridad.',
      other: 'Larga duración de acción, bloqueo sensorial > motor.'
    },
    contraindications: ['Hipersensibilidad a amidas', 'Infección en sitio de punción', 'Coagulopatía (para bloqueos)'],
    halfLife: '2.7 - 3.5 horas',
    latency: '5 - 10 minutos',
    duration: '3 - 6 horas',
    metabolism: 'Hepático.',
    receptors: 'Canales de Na+ dependientes de voltaje',
    elimination: 'Renal'
  },
  {
    id: 'morphine',
    name: 'Morfina',
    description: 'Opioide natural, estándar de oro para el dolor.',
    mechanismOfAction: 'Agonista de los receptores opioides mu (µ).',
    regimens: [
      { effect: 'Analgesia IV (Bolo)', minDose: 0.05, maxDose: 0.1, unit: 'mg/kg' },
      { effect: 'Analgesia Postop (PCA)', minDose: 0.01, maxDose: 0.03, unit: 'mg/kg/h' }
    ],
    systemEffects: {
      cardiovascular: 'Hipotensión ortostática, liberación de histamina (vasodilatación).',
      respiratory: 'Depresión respiratoria, disminución de la sensibilidad al CO2.',
      cns: 'Analgesia profunda, sedación, miosis, náuseas/vómitos (zona gatillo).',
      other: 'Espasmo del esfínter de Oddi, retención urinaria, prurito.'
    },
    contraindications: ['Hipersensibilidad a opioides', 'Asma bronquial aguda', 'Obstrucción intestinal'],
    halfLife: '2 - 3 horas',
    latency: '15 - 30 minutos (IV)',
    duration: '3 - 4 horas',
    metabolism: 'Hepático (Glucuronidación - M6G activo).',
    receptors: 'Opioides Mu (µ), Kappa (κ)',
    elimination: 'Renal (Cuidado en falla renal por M6G).'
  },
  {
    id: 'rocuronium',
    name: 'Rocuronio',
    description: 'Bloqueador neuromuscular no despolarizante.',
    mechanismOfAction: 'Antagonista competitivo de los receptores nicotínicos de acetilcolina en la placa motora terminal.',
    regimens: [
      { effect: 'Intubación Estándar', minDose: 0.6, maxDose: 0.9, ed50: 0.15, ed95: 0.3, unit: 'mg/kg' },
      { effect: 'Secuencia Rápida', minDose: 0.9, maxDose: 1.2, unit: 'mg/kg' },
      { effect: 'Mantenimiento (Infusión)', minDose: 0.3, maxDose: 0.6, unit: 'mg/kg/h' }
    ],
    systemEffects: {
      cardiovascular: 'Mínimos efectos, ligera taquicardia ocasional.',
      respiratory: 'Parálisis de músculos respiratorios (apnea terapéutica).',
      cns: 'Sin efectos (no cruza barrera hematoencefálica).',
      other: 'Efecto reversible con Sugammadex o Neostigmina.'
    },
    contraindications: ['Hipersensibilidad al rocuronio o bromuros'],
    halfLife: '60 - 90 minutos',
    latency: '60 - 90 segundos',
    duration: '30 - 45 minutos',
    metabolism: 'Mínimo hepático.',
    receptors: 'Nicotínicos de Acetilcolina (Placa motora)',
    elimination: 'Biliar (70%) y Renal (30%).'
  },
  {
    id: 'succinylcholine',
    name: 'Succinilcolina',
    description: 'Bloqueador neuromuscular despolarizante.',
    mechanismOfAction: 'Mimetiza la acción de la acetilcolina, produciendo una despolarización persistente de la placa motora.',
    regimens: [
      { effect: 'Intubación (Secuencia Rápida)', minDose: 1.0, maxDose: 1.5, ed50: 0.15, ed95: 0.3, unit: 'mg/kg' }
    ],
    systemEffects: {
      cardiovascular: 'Bradicardia (especialmente en niños o segunda dosis), arritmias.',
      respiratory: 'Apnea por parálisis muscular.',
      cns: 'Aumento de la presión intracraneal (transitorio).',
      other: 'Fasciculaciones, mialgias, aumento de presión intraocular y gástrica, hiperpotasemia.'
    },
    contraindications: ['Antecedente de Hipertermia Maligna', 'Grandes quemados (>24h)', 'Denervación muscular', 'Hiperpotasemia'],
    halfLife: '2 - 4 minutos',
    latency: '30 - 60 segundos',
    duration: '5 - 10 minutos',
    metabolism: 'Pseudocolinesterasa plasmática.',
    receptors: 'Nicotínicos de Acetilcolina',
    elimination: 'Renal (metabolitos).'
  },
  {
    id: 'midazolam',
    name: 'Midazolam',
    description: 'Benzodiacepina de acción corta.',
    mechanismOfAction: 'Potenciación del efecto inhibitorio del GABA al unirse al receptor benzodiacepínico.',
    regimens: [
      { effect: 'Premedicación / Ansiolisis', minDose: 0.02, maxDose: 0.04, unit: 'mg/kg' },
      { effect: 'Sedación Consciente', minDose: 0.05, maxDose: 0.1, ed50: 0.04, ed95: 0.08, unit: 'mg/kg' },
      { effect: 'Inducción', minDose: 0.1, maxDose: 0.3, unit: 'mg/kg' }
    ],
    systemEffects: {
      cardiovascular: 'Leve disminución de la resistencia vascular sistémica.',
      respiratory: 'Depresión respiratoria dosis-dependiente, sinergia con opioides.',
      cns: 'Ansiolisis, amnesia anterógrada, sedación, anticonvulsivante.',
      other: 'Efecto reversible con Flumazenilo.'
    },
    contraindications: ['Hipersensibilidad a benzodiacepinas', 'Glaucoma de ángulo estrecho'],
    halfLife: '1.5 - 2.5 horas',
    latency: '1 - 3 minutos (IV)',
    duration: '15 - 80 minutos',
    metabolism: 'Hepático (CYP3A4).',
    receptors: 'GABA-A (Sitio BZD)',
    elimination: 'Renal'
  },
  {
    id: 'etomidate',
    name: 'Etomidato',
    description: 'Hipnótico no barbitúrico de acción corta.',
    mechanismOfAction: 'Modulador alostérico positivo de los receptores GABA-A.',
    regimens: [
      { effect: 'Inducción', minDose: 0.2, maxDose: 0.3, ed50: 0.15, ed95: 0.25, unit: 'mg/kg' }
    ],
    systemEffects: {
      cardiovascular: 'Gran estabilidad hemodinámica (mínimo efecto en FC y PA).',
      respiratory: 'Mínima depresión respiratoria.',
      cns: 'Hipnosis, disminución de presión intracraneal y flujo sanguíneo cerebral.',
      other: 'Supresión adrenocortical (inhibición 11-beta-hidroxilasa), mioclonías, náuseas.'
    },
    contraindications: ['Hipersensibilidad al etomidato', 'Sepsis severa (relativa por supresión adrenal)'],
    halfLife: '2 - 5 horas',
    latency: '30 - 60 segundos',
    duration: '3 - 5 minutos',
    metabolism: 'Hepático y esterasas plasmáticas.',
    receptors: 'GABA-A',
    elimination: 'Renal (85%) y Biliar.'
  },
  {
    id: 'ketamine',
    name: 'Ketamina',
    description: 'Anestésico disociativo.',
    mechanismOfAction: 'Antagonista no competitivo de los receptores NMDA (N-metil-D-aspartato).',
    regimens: [
      { effect: 'Inducción Anestésica', minDose: 1, maxDose: 2, ed50: 0.5, ed95: 1.0, unit: 'mg/kg' },
      { effect: 'Analgesia (Dosis Subanestésica)', minDose: 0.1, maxDose: 0.5, unit: 'mg/kg' },
      { effect: 'Sedación (IM)', minDose: 4, maxDose: 6, unit: 'mg/kg' }
    ],
    systemEffects: {
      cardiovascular: 'Estimulación simpática (aumento de FC, PA y GC).',
      respiratory: 'Mantenimiento de reflejos de vía aérea y drive respiratorio, broncodilatación.',
      cns: 'Anestesia disociativa, analgesia, aumento de flujo sanguíneo cerebral.',
      other: 'Sialorrea, reacciones de emergencia (alucinaciones), nistagmo.'
    },
    contraindications: ['Hipertensión severa no controlada', 'Eclampsia/Preeclampsia', 'Cardiopatía isquémica severa'],
    halfLife: '2 - 3 horas',
    latency: '30 - 60 segundos (IV)',
    duration: '10 - 20 minutos',
    metabolism: 'Hepático (Norketamina activa).',
    receptors: 'NMDA, Opioides, Muscarínicos',
    elimination: 'Renal'
  },
  {
    id: 'remifentanil',
    name: 'Remifentanilo',
    description: 'Opioide de acción ultra corta.',
    mechanismOfAction: 'Agonista selectivo de receptores opioides mu (µ) con metabolismo por esterasas plasmáticas.',
    regimens: [
      { effect: 'Inducción (Bolus)', minDose: 0.5, maxDose: 1.0, unit: 'mcg/kg' },
      { effect: 'Mantenimiento (Infusión)', minDose: 0.05, maxDose: 2.0, ed50: 0.05, ed95: 0.1, unit: 'mcg/kg/min' }
    ],
    systemEffects: {
      cardiovascular: 'Bradicardia e hipotensión dosis-dependiente.',
      respiratory: 'Depresión respiratoria potente, apnea.',
      cns: 'Analgesia profunda, sedación.',
      other: 'Hiperalgesia inducida por opioides (tras suspensión brusca).'
    },
    contraindications: ['Hipersensibilidad a derivados del fentanilo', 'Uso epidural o intratecal (contiene glicina)'],
    halfLife: '3 - 10 minutos (contexto-sensible)',
    latency: '1 - 1.5 minutos',
    duration: '5 - 10 minutos',
    metabolism: 'Esterasas plasmáticas y tisulares (no hepático).',
    receptors: 'Opioides Mu (µ)',
    elimination: 'Renal (metabolitos inactivos).'
  },
  {
    id: 'atracurium',
    name: 'Atracurio',
    description: 'Bloqueador neuromuscular no despolarizante.',
    mechanismOfAction: 'Antagonista competitivo de receptores nicotínicos con eliminación de Hofmann.',
    regimens: [
      { effect: 'Intubación', minDose: 0.4, maxDose: 0.5, ed50: 0.12, ed95: 0.23, unit: 'mg/kg' },
      { effect: 'Mantenimiento (Bolus)', minDose: 0.08, maxDose: 0.1, unit: 'mg/kg' },
      { effect: 'Mantenimiento (Infusión)', minDose: 0.3, maxDose: 0.6, unit: 'mg/kg/h' }
    ],
    systemEffects: {
      cardiovascular: 'Liberación de histamina (hipotensión, taquicardia) si se inyecta rápido.',
      respiratory: 'Apnea por parálisis muscular, broncoespasmo (histamina).',
      cns: 'Sin efectos.',
      other: 'Laudanosina (metabolito) puede ser proconvulsivante en dosis muy altas.'
    },
    contraindications: ['Hipersensibilidad al atracurio o besilato'],
    halfLife: '20 minutos',
    latency: '2 - 3 minutos',
    duration: '30 - 45 minutos',
    metabolism: 'Eliminación de Hofmann (pH y T° dependiente) e hidrólisis éster.',
    receptors: 'Nicotínicos de Acetilcolina',
    elimination: 'Renal y Biliar (metabolitos).'
  },
  {
    id: 'dexmedetomidine',
    name: 'Dexmedetomidina',
    description: 'Agonista selectivo de los receptores alfa-2 adrenérgicos con propiedades sedantes y analgésicas.',
    mechanismOfAction: 'Agonismo selectivo de receptores alfa-2 presinápticos en el locus coeruleus, inhibiendo la liberación de noradrenalina.',
    regimens: [
      { effect: 'Sedación en UCI', minDose: 0.2, maxDose: 0.7, unit: 'mcg/kg/h' },
      { effect: 'Sedación para Procedimientos', minDose: 0.2, maxDose: 1.0, unit: 'mcg/kg/h' },
      { effect: 'Bolo Inicial (en 10 min)', minDose: 0.5, maxDose: 1.0, unit: 'mcg/kg' }
    ],
    systemEffects: {
      cardiovascular: 'Bradicardia, hipotensión; hipertensión transitoria con bolos rápidos por activación alfa-2 periférica.',
      respiratory: 'Mínima depresión respiratoria, preserva la respuesta al CO2 y la permeabilidad de la vía aérea.',
      cns: 'Sedación "cooperativa" (fácil despertar), analgesia, ansiolisis, disminución del flujo sanguíneo cerebral.',
      other: 'Disminución del temblor postoperatorio, sequedad de boca (xerostomía).'
    },
    contraindications: ['Hipersensibilidad a la dexmedetomidina', 'Bloqueo cardiaco de segundo o tercer grado sin marcapasos', 'Inestabilidad hemodinámica severa'],
    halfLife: '2 - 2.5 horas',
    latency: '5 - 10 minutos',
    duration: '60 - 120 minutos (tras infusión prolongada)',
    metabolism: 'Hepático (Glucuronidación y CYP2A6).',
    receptors: 'Alfa-2 adrenérgicos (Selectividad 1600:1 vs Alfa-1)',
    elimination: 'Renal (95%) y Fecal (5%)'
  }
];
