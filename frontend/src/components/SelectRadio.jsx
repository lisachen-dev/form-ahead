


export default function SelectRadio(){

    return(

        <label htmlFor="paymentMethod">
            <legend>If we’re sharing food or drinks, how do you prefer to handle the cost?</legend>
            <select
                id="paymentMethod"
                name="paymentMethod"
                value={paymentMethod}
                onChange = {(e) => handleChange(e)}
            >
            <option value="">-- Select --</option>
            <option value="split">Split the check evenly</option>
            <option value="self">Pay only for what I ordered</option>
            <option value="ambivalent">I'm flexible / I don't care</option>
            </select >
        </label>

    )
}