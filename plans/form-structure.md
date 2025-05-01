# 📝 HangOut Planner – Form Structure (v1)

This form is designed for coordinating group hangouts with flexibility and clarity. Guests can submit individually or on behalf of a group.

---

## 1. Name
**Type:** Short Answer  
**Label:**
> What’s your name?

---

## 2. Are you filling this out just for yourself, or for a group?
**Type:** Single Choice (Radio buttons)  
**Options:**
- Just me
- I’m answering for myself and others (like a +1, friends, or my partner)

**Note:**
> This helps us avoid double-counting. You can also send this link to others if they want to submit their own response.

---

## 3. Group Size _(conditional)_
**Shown only if answering for a group**  
**Type:** Integer Input  
**Range:** 1–5  
**Label:**
> Including yourself, how many people are you responding for?

---

## 4. Food Allergies or Dietary Restrictions
**Type:** Short Answer  
**Label:**
> Any food allergies or dietary restrictions we should know about?

---

## 5. Payment Preference
**Type:** Multiple Choice (Radio buttons)  
**Label:**
> If we’re sharing food or drinks, how do you prefer to handle the cost?

**Options:**
- Split the check evenly
- Pay only for what I ordered
- I’m flexible / don’t mind either way

---

## 6. Available Dates
**Type:** Checkbox Group  
**Label:**
> Which of these dates work for you? Select all that apply.

**Options:** _(generated dynamically by host)_
- [ ] Sat May 10 – Noon
- [ ] Sat May 10 – 6 PM
- [ ] Sun May 11 – Noon
- [ ] …
- [ ] Sun June 29 – 6 PM

---

## 7. Anything else we should know?
**Type:** Long Answer  
**Label:**
> Anything else we should know? (Scheduling conflicts, accessibility needs, preferences, etc.)

---

## 🔧 Notes for Future Expansion
- Each question is structured with: `label`, `type`, and `options` (if needed)
- Easy to add new questions without breaking format
- Conditional logic can be applied per question based on previous answers
