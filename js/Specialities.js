

const specialityCards = document.querySelectorAll(".speciality-grid .spec-card");
const bookCard = document.querySelector(".book-card");
const bookTitle = document.querySelector(".book-header h3");
const bookIcon = document.querySelector(".book-header img");
const bookDesc = bookCard ? bookCard.querySelector("p") : null;

const specialityContent = {
  "Cardiac Surgery":
    "Cardiac surgery, also known as heart surgery, is a medical specialty focused on treating heart conditions through surgical procedures. At Sahaydri Hospital, our cardiac surgery team is dedicated to providing comprehensive care for patients with various heart problems, ensuring they receive the best possible treatment and support.",
  Cardiology:
    "At Sahyadri Hospitals, we have a team of top-rated cardio surgeons, medical consultants and cardiologists in Pune.We have diagnosed and conducted surgeries on thousands of children and adults having different types of heart conditions.Our heart care department is one of the most comprehensive heart care centres in India & one of the best cardiology hospitals in Pune.We have a wide range of subspecialized experts who have exclusive training in different cardio arenas such as congenital cardiovascular diseases, heart valve conditions, coronary artery problems, and many more.",
  Endocrinology:
    "With constant upgradations and allocation of modern medical devices, Sahyadri Hospital is on the way to becoming one of the top-rated multi-specialty Hospital in Pune. With our expert medical professionals heading the endocrinology department, we are proud to offer world-class patient care and post-operative treatment.Here, the surgeons, medical consultants, and staff have the expertise and specific training which contributes to high-quality care. We treat a wide array of endocrine diseases and have both surgical and non-surgical procedures as options.",
  Gastroenterology:
    "The Gastroenterology Department at Sahyadri Hospital diagnoses and treats digestive system disorders. Our experienced gastroenterologists are dedicated to investigating, diagnosing, treating, and preventing a wide range of gastrointestinal issues.Our doctors provide comprehensive solutions for conditions affecting the stomach, oesophagus, large intestine, pancreas, colon, and gall bladder.Sahyadri Hospital is committed to delivering personalized care and innovative treatments to improve our patients’ digestive health and overall well-being.",
  "General Surgery":
    "Sahyadri Hospital is one of the most experienced hospitals in general surgery practice. We have a team of highly-trained professionals who have conducted over 2000 laparoscopic surgeries in a year. Our surgeons are the best surgeons you can find in the country as they know whether you need surgery or the disease can be cured through medicines or physiotherapy. Plus, we are available at your service 24×7 for emergencies and other trauma-related services. The general surgery department of Sahyadri takes care of all the diagnostic, preventive, and therapeutic or surgical procedures.",
  Haematology:
    "Sahyadri Hospitals has one of the top-rated haematology departments in India. The availability of a well-stocked blood bank, bone marrow transplantation unit and hematology laboratory distinguishes us from others. From providing diagnosis facilities to treating various blood diseases, a patient finds complete care under one roof.Our hematology team stays up-to-date and works together with other medical staff to provide world-class care. Moreover, we use cutting-edge technologies to treat hemophilias, clotting disorders, blood cancers, etc.We understand that blood disorders can affect different organs in the body. Hence, with the aid of the latest medical devices and the expertise of qualified healthcare professionals, we offer premium-quality care to patients.",
  Nephrology:
    "At Sahyadri Hospitals, the Department of Nephrology offers expert care for a wide range of kidney-related conditions, including chronic kidney disease (CKD), kidney failure, kidney stones, hypertension, and kidney transplant services. Our team of highly trained nephrologists provides personalized treatment plans, ensuring each patient receives the best care tailored to their unique needs.We specialize in the management of kidney diseases, including dialysis, renal replacement therapy, and advanced treatments for hypertension. Using state-of-the-art diagnostic techniques such as kidney function tests, ultrasounds, and biopsy procedures, we accurately assess and treat neurological conditions. ",
    Cardiology:
    "At Sahyadri Hospitals, we have a team of top-rated cardio surgeons, medical consultants and cardiologists in Pune.We have diagnosed and conducted surgeries on thousands of children and adults having different types of heart conditions.Our heart care department is one of the most comprehensive heart care centres in India & one of the best cardiology hospitals in Pune.We have a wide range of subspecialized experts who have exclusive training in different cardio arenas such as congenital cardiovascular diseases, heart valve conditions, coronary artery problems, and many more.",
  Endocrinology:
    "With constant upgradations and allocation of modern medical devices, Sahyadri Hospital is on the way to becoming one of the top-rated multi-specialty Hospital in Pune. With our expert medical professionals heading the endocrinology department, we are proud to offer world-class patient care and post-operative treatment.Here, the surgeons, medical consultants, and staff have the expertise and specific training which contributes to high-quality care. We treat a wide array of endocrine diseases and have both surgical and non-surgical procedures as options.",
  Gastroenterology:
    "The Gastroenterology Department at Sahyadri Hospital diagnoses and treats digestive system disorders. Our experienced gastroenterologists are dedicated to investigating, diagnosing, treating, and preventing a wide range of gastrointestinal issues.Our doctors provide comprehensive solutions for conditions affecting the stomach, oesophagus, large intestine, pancreas, colon, and gall bladder.Sahyadri Hospital is committed to delivering personalized care and innovative treatments to improve our patients’ digestive health and overall well-being.",
};

if (specialityCards.length && bookCard && bookTitle && bookIcon && bookDesc) {
  const getIconFromCard = (card) => {
    const svg = card.querySelector("svg");
    if (!svg) return "";
    const svgMarkup = encodeURIComponent(svg.outerHTML);
    return `data:image/svg+xml;charset=utf-8,${svgMarkup}`;
  };

  const setActiveSpeciality = (card) => {
    specialityCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");

    const specialityName = card.querySelector("p")?.textContent?.trim() || "Speciality";
    bookTitle.textContent = specialityName;
    bookDesc.textContent =
      specialityContent[specialityName] ||
      `${specialityName} at Sahyadri Hospital provides expert diagnosis, treatment, and personalized care plans tailored to each patient's condition.`;

    const iconSrc = getIconFromCard(card);
    if (iconSrc) {
      bookIcon.src = iconSrc;
      bookIcon.alt = `${specialityName} icon`;
    }
  };

  specialityCards.forEach((card) => {
    card.addEventListener("click", () => setActiveSpeciality(card));
  });

  const initiallyActiveCard =
    document.querySelector(".speciality-grid .spec-card.active") || specialityCards[0];
  setActiveSpeciality(initiallyActiveCard);
}

