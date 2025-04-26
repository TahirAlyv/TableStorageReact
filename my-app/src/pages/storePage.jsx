import { useState } from "react";
import axios from 'axios';
function Store(){

    const [form, setForm] = useState({
        countryName: "",
        CityName: "",
        Address: "",
      });
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('https://localhost:7036/api/Store/stores', form);
          console.log("Successfully sent:", response.data);
          setForm({ name: "", price: "",Address:"" });
        } catch (error) {
          console.error("Sending error:", error.response?.data || error.message);
        }
      };

    return(

        <form onSubmit={handleSubmit} style={{ padding: "20px", maxWidth: "400px" }}>
        <h2>Create a Store</h2>
  
        <input
          name="countryName"
          value={form.countryName}
          onChange={handleChange}
          placeholder="countryName"
        /><br />

        <input
          name="CityName"
          value={form.CityName}
          onChange={handleChange}
          placeholder="CityName"
        /><br />

        <input
          name="Address"
          value={form.Address}
          onChange={handleChange}
          placeholder="Address"
        /><br />
  
        <button type="submit">Add</button>
      </form>
    )
}

export default Store