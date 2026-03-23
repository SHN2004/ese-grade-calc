# ESE Grade Calculator 🎓

A minimalist, responsive, and sleek web tool to calculate your End Semester Examination (ESE) mark requirements based on your current sessional (internal) marks. Built specifically for "nammude pareekshakal" to quickly figure out how much you need to score to hit your target grade or simply pass the course.

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

---

## 🚀 Features

- **Sleek Interface**: Built with an elegant, terminal-inspired dark mode aesthetic using Inter and JetBrains Mono fonts.
- **Dynamic Calculation**: Instantly calculates the required ESE marks for every possible grade (S, A+, A, B+, B, C+, C, D, P).
- **Course Presets**: 
  - **Theory Courses**: 50 Max Sessional, 100 Max ESE.
  - **Integrated Courses**: 150 Max Sessional, 100 Max ESE.
  - **Lab Courses**: 75 Max Sessional, 75 Max ESE.
- **Real-time Feedback**: Highlights minimum marks needed to pass and warns you if a certain grade is mathematically impossible based on your sessionals.
- **Save Multiple Subjects**: Add all your current semester subjects and see a comprehensive overview in one go.

## 🛠 Usage

1. **Access the App**: Since this is a static webpage, simply open `grade_calculator.html` in your favorite web browser. You can also host it via GitHub Pages.
2. **Setup a Subject**: 
    - Click one of the quick-presets (`theory course`, `integrated course`, or `lab course`) to automatically fill max marks.
    - Enter the `subject_name` (e.g. EC600A-B2).
    - Enter your `current_marks` (sessional marks). *Tip: You can check RSMS for your current sessional marks before calculating.*
3. **Calculate**: Click **add subject**. Data is instantly tabulated into a detailed "Grades required" card showing:
    - Target Percentage (%)
    - Grade Point (GP)
    - Minimum ESE required to lock that specific grade
4. **Edit on the fly**: Made a mistake or want to experiment? Quickly update current marks or max sessionals using the inline inputs at the bottom of the subject card.

## 📊 Grading Logic

The calculator relies on percentage-based grading logic:

| Grade | GP  | Target % |
|-------|-----|----------|
| S     | 10  | 90%      |
| A+    | 9.0 | 85%      |
| A     | 8.5 | 80%      |
| B+    | 8.0 | 75%      |
| B     | 7.5 | 70%      |
| C+    | 7.0 | 65%      |
| C     | 6.5 | 60%      |
| D     | 6.0 | 55%      |
| P     | 5.5 | 50%      |

*Note: The app will let you know if a certain grade is "impossible", or alert you if you need a specific minimum passing requirement (e.g. 40/100) in your ESE to pass the subject entirely.*

## 💻 Tech Stack

- **HTML5**: Semantic and clean document structure.
- **CSS3**: No external libraries or bloated frameworks. Pure CSS with Flexbox/Grid layouts, custom variables, and sleek hover transitions. 
- **Vanilla JavaScript**: Lightweight and fast client-side scripting for instant calculations and DOM manipulation.

## ☕ Support

*“coded with claude - cuz enikk padikkanam and enikk samayam illa”* 

If this tool saved your life during finals or helped you strategize your study sessions, consider buying me a coffee!

<a href="https://buymeacoffee.com/ryyansafar" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

---

**Author**: ryyan safar
