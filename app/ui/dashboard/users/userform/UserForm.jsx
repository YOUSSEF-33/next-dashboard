"use client";
import { addUser } from "@/app/lib/actions";
import styles from "./addUser.module.css";

export default function UserForm() {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="text" placeholder="firstName" name="firstName" required />
        <input type="text" placeholder="lastName" name="lastName"  />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="country" id="country">
          <option value={true}>country</option>
          <option
            value={"United States"}
          >
            United States
          </option>
          <option value={"Egypt"}>
            Egypt
          </option>
          <option value={"Canada"}>
            Canada
          </option>
          <option value={"Mexico"}>
            Mexico
          </option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="6"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
