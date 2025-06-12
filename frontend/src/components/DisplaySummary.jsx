import React from 'react';

export default function DisplaySummary({ formData, options }) {
  const {
    fullName,
    phone,
    email,
    guestCount,
    allergies,
    paymentMethod,
    availableDays,
    additionalNotes,
  } = formData;

  // Convert selected values to labels for display
  const availableDayLabels = availableDays?.map((val) => {
    const matched = options.find((opt) => opt.value === val);
    return matched ? matched.label : val;
  });

  return (
    <>
      <h2>Current Response Summary</h2>
      <ul>
        <li><strong>Name:</strong> {fullName || '—'}</li>
        <li><strong>Phone:</strong> {phone || '—'}</li>
        <li><strong>Email:</strong> {email || '—'}</li>
        <li><strong>Guest Count:</strong> {guestCount || '—'}</li>
        <li><strong>Allergies:</strong> {allergies || 'None noted'}</li>
        <li><strong>Payment Preference:</strong> {paymentMethod || '—'}</li>
        <li>
          <strong>Available Days:</strong>{' '}
          {availableDayLabels && availableDayLabels.length > 0
            ? (
              <ul>
                {availableDayLabels.map((day) => (
                  <li key={day}>{day}</li>
                ))}
              </ul>
            )
            : 'No dates selected'}
        </li>
        <li><strong>Additional Notes:</strong> {additionalNotes || '—'}</li>
      </ul>
    </>
  );
}
