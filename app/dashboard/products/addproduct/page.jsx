"use client";
import { addProduct } from "@/app/lib/actions";
import styles from "../../../ui/dashboard/users/userform/addUser.module.css";


 function page() {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <input type="text" placeholder="size" name="size" required />
        <input
          type="number"
          placeholder="price"
          name="price"
          required
          min={1}
        />
        <input type="text" placeholder="color" name="color" />
        <select name="isStoke" id="isStoke">
          <option value={false}>
            Is Stoke
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <input
          type="number"
          placeholder="count"
          name="count"
          required
          min={1}
        />
        <textarea
          name="desc"
          id="desc"
          rows="6"
          placeholder="description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default page