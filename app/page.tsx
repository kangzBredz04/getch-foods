import Button from "@/components/button";

export default function Home() {
  return (
    <main>
      <p>Selamat Datang di Getch Foods</p>
      <p>(Ini adalah Home)</p>
      <Button href={"/about"} text={"Tentang"} />
    </main>
  );
}
