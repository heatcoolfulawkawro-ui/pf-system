---
name: kontrola-podatkowa
description: "Kontrola każdej tezy podatkowej, składkowej i księgowej przed wpisaniem jej do dokumentu lub kalkulatora — na tekstach jednolitych, z cytatem i numerem artykułu."
---

# Kontrola podatkowa — zanim liczba trafi do dokumentu

Używaj tej procedury **za każdym razem**, gdy masz podać stawkę, limit, próg, obciążenie
albo obowiązek podatkowy, składkowy lub księgowy. Także wtedy, gdy „to oczywiste".
Powód: to jest obszar, w którym pomyłka jest niewidoczna dopóki nie przyjdzie kontrola,
a koszt błędu ponosi użytkownik, nie ja.

## Zasada zerowa

**Żadna liczba podatkowa nie trafia do dokumentu, kalkulatora ani odpowiedzi bez sprawdzenia
w tekście jednolitym ustawy.** Nie z pamięci, nie z omówienia, nie z bloga kancelarii.
Jeżeli tekstu jednolitego nie ma pod ręką — napisz wprost „nie sprawdziłem" i oznacz to
jako niezweryfikowane, zamiast podawać liczbę.

Przy projekcie SP HNC teksty jednolite leżą w `I:\HNC FIRMA\20_USTAWY\<akt>\<akt>_tekst-jednolity.txt`
(lokalnie `/home/claude/hnc/20_USTAWY/`). Czytaj je przez `grep -n` i `sed -n`.

## Siedem pytań kontrolnych do każdej tezy

Przejdź je po kolei. Każde ma wykrywać inny typ błędu.

1. **PRZYCHÓD CZY DOCHÓD?** Czy próg, limit albo stawka odnosi się do przychodu, dochodu,
   czy do podstawy obliczenia podatku? To najczęstsza pomyłka i najbardziej kosztowna.
   Skala PIT działa na **podstawie obliczenia podatku** (art. 27 ust. 1 PIT — rozstrzyga nagłówek
   kolumny w tabeli ustawowej), ryczałt na **przychodzie**, składka zdrowotna od powołania
   na **wynagrodzeniu pobieranym**, czyli przychodzie.

2. **DO KTÓREGO WORKA TO WPADA?** Wymień wszystkie równoległe reżimy i sprawdź, czy się sumują.
   Skala, ryczałt, podatek zryczałtowany od dywidendy i limit VAT to **cztery różne worki
   o podobnych liczbach**. Sprawdź osobno, co wchodzi do każdego — i czy dana kwota nie wchodzi
   do dwóch naraz.

3. **JAKIE SĄ KOSZTY UZYSKANIA I CZY MAJĄ LIMIT?** Czy limit dotyczy kosztów, czy przychodu?
   Czy jest wspólny dla kilku tytułów? Czy liczy się miesięcznie czy rocznie? Czy wolno wykazać
   koszty faktyczne zamiast ryczałtowych?

4. **CZY SKŁADKA JEST ODLICZALNA?** Osobno od dochodu i osobno od podatku. Sprawdź, czy przepis,
   który dawał odliczenie, nie został uchylony.

5. **KTO JEST PŁATNIKIEM I W JAKIEJ WYSOKOŚCI POBIERA ZALICZKĘ?** Jeżeli płatnik pobiera stawkę
   niższą niż realna stawka roczna podatnika, powstaje **dopłata**. Policz ją i powiedz o niej
   z góry — to jest prawdziwy pieniądz, który ktoś musi mieć na koncie w kwietniu.

6. **JAKIE OBOWIĄZKI FORMALNE I TERMINY?** Deklaracje, zgłoszenia, informacje. Szczególnie te,
   które obowiązują **mimo zwolnienia z innego obowiązku** — to kategoria najczęściej pomijana.

7. **CZY STRONY SĄ POWIĄZANE?** Jeżeli tak — obowiązek ceny rynkowej działa zawsze, niezależnie
   od progów dokumentacyjnych, i działa w obie strony.

## Pułapki, które już raz kosztowały błąd

Ta lista rośnie. Sprawdzaj ją przy każdej kontroli.

- **Próg skali to podstawa, nie przychód.** Brutto może być wyższe o koszty uzyskania.
- **Kwota zmniejszająca podatek nie znika powyżej progu** — jest wbudowana w kwotę stałą z tabeli.
  Odjęcie jej drugi raz zaniża podatek.
- **Limit kosztów autorskich dotyczy KOSZTÓW, nie przychodu** — przy stawce 50% pozwala
  skonsumować dwukrotność limitu przychodu.
- **Limity „łączne" nie mnożą się przez liczbę podmiotów.** Jeżeli przepis mówi „nie mogą
  przekroczyć łącznie" — to jeden limit na podatnika, nie na każdą umowę.
- **Koszty ryczałtowe bywają miesięczne.** Należą się za miesiąc faktycznej wypłaty,
  a nie automatycznie za dwanaście miesięcy.
- **Umowa między spółką a członkiem zarządu wymaga szczególnej reprezentacji** — bez tego jest
  nieważna, a skutki podatkowe są kaskadowe (art. 210 KSH).
- **Najem „prywatny" w PIT nie jest prywatny w VAT** — to działalność gospodarcza w rozumieniu
  ustawy o VAT i wlicza się do limitu zwolnienia podmiotowego razem z innymi przychodami.
- **Limit zwolnienia VAT przy podmiotach powiązanych liczy się po wartości rynkowej**, więc
  zaniżona cena go nie chroni.
- **Stawka obniżona w CIT ma dwa niezależne limity** — bieżącego roku i roku poprzedniego,
  liczone na innych podstawach i po innych kursach.
- **Katalogi wyliczeniowe są zamknięte.** Jeżeli przepis wylicza źródła, to czego nie wymienia —
  nie wchodzi. Sprawdź wyliczenie zamiast zakładać.

## Jak raportować wynik

Dla każdej tezy: **POTWIERDZONA / BŁĘDNA / NIEPEŁNA**, numer artykułu i **dosłowny cytat**
z tekstu jednolitego. Przy błędzie — jak jest naprawdę i co się zmienia w liczbach.

Potwierdzenie „wszystko się zgadza" bez wskazania choćby jednej wątpliwości jest sygnałem,
że kontrola nie została wykonana. Zawsze kończ sekcją **„czego nie sprawdziłem i co mnie niepokoi"** —
to jest zwykle najcenniejsza część raportu.

## Kiedy zlecić to podagentowi

Przy więcej niż kilku tezach naraz albo przy przeglądzie całej konstrukcji — zleć audyt
podagentowi z wyraźnym nastawieniem: **ma szukać błędów, nie potwierdzać tez**, korzystać wyłącznie
z lokalnych tekstów jednolitych i cytować dosłownie. Nastawienie adwersarialne trzeba napisać
wprost, inaczej podagent potwierdza to, co dostał.

## Czego ta procedura nie zastępuje

Księgowej ani doradcy podatkowego. Kontrola na tekstach jednolitych wyłapuje błędy w stawkach,
limitach i obowiązkach — ale nie zastąpi oceny konkretnego stanu faktycznego przez osobę,
która bierze za to odpowiedzialność zawodową. Mów o tym otwarcie, zamiast sugerować pewność,
której nie ma.