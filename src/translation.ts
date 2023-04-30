const productTypeToHebrew :{ [key: string]: string  }= {
    cleanser: "סבון",
    cleansing_balm: "באלם ניקוי",
    cleansing_oil: "שמן ניקוי",
    moisturizer: "קרם לחות",
    serum: "סרום",
    sunscreen: "קרם הגנה",
    eye_cream: "קרם עיניים",
    eye_patches: "רטיות לעיניים",
    face_mask: "מסכת פנים",
    lip_balm: "באלם לשפתיים",
    spot_treatment: "טיפול נקודתי",
    toner: "טונר"
}

const skinProblemToHebrew :{ [key: string]: string  }= {
    acne: "אקנה ופצעונים",
    antiaging: "אנטיאייג'ינג",
    broken_barrier: "מחסום עור שבור",
    dehydrated: "עור מיובש",
    pie: "PIE- כתמים אדומים אחרי פצעונים",
    pigmentation: "פיגמנטציה",
    redness: "אדמומיות",
    blackheads: "ראשים שחורים",
    keratosis_pilaris: "קרטוזיס פילאריס (עור תות)",
    puffy_eyes: "נפיחות מתחת לעיניים",
    sebaceous_filaments: "sebaceous filaments",
    texture: "טקסטורה",
}

export {productTypeToHebrew, skinProblemToHebrew};