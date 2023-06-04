# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Ekaterina Sedykh | 355093 |
| Yuhan Bi | 335456 |
| Olena Zavertiaieva | 364500 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (7th April, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

> For this project we are choosing three tobacco-centric datasets:  “Global Burden of Disease Study 2019 (GBD 2019) Smoking Tobacco Use Prevalence 1990-2019” ,  “Global Burden of Disease Study 2019 (GBD 2019) Chewing Tobacco Use Prevalence 1990-2019” and “Relative risks: smoking”. These datasets have been compiled and published by the Institute for Health Metrics and Evaluation (IHME), providing comprehensive and standardized information on smoking and chewing prevalence across countries, age groups, and genders. 
>
> Due to the thorough quality checks performed by the IHME, the datasets are considered to be of high quality. As a result of its well-structured format, it is anticipated that only minimal preprocessing and data cleaning will be necessary.


### Problematic

> The general topic of our visualization is the global prevalence of smoking and chewing tobacco and its health implications. The main axes to be developed in this project are:
> - The global and regional trends in smoking and chewing prevalence from 1990 to 2019.
> - The differences in smoking and chewing tobacco prevalence as well as the number of current smokers across genders and age groups.
> - The correlation between smoking prevalence and health risk outcomes such as morbidity and mortality among non-smokers, current smokers and different smoking cessation phase of former smokers.
>
> Our visualization aims to cater to individuals in the fields of public health, policymaking, and research who are interested in the areas of tobacco control, health promotion and disease prevention.


### Exploratory Data Analysis

> During the preprocessing phase, we will filter, aggregate, and transform the dataset to facilitate analysis and visualization. We will compute basic statistics, such as mean, median, mode, and standard deviation, to gain insights into the distribution of smoking prevalence across countries, age groups, and genders. Additional analyses may include identifying countries with the highest and lowest smoking prevalence and examining the change in smoking prevalence over time. All of this in the end will help us to better do data-driven storytelling.
>
> We’ll refer to our datasets as “Smoking” and “Chewing”. In [Explorative Analysis.ipynb](https://github.com/com-480-data-visualization/project-2023-vizhack/blob/master/Explorative%20Analysis.ipynb) we are doing just simple exploration of the “smoking” dataset as it will be our main source of data. There we can see some trends of how different genders were smoking during set years, for example in men there is a clear increase, while for women after the peak in aroung 2007 the number of smoking women started to decrease. This trend of course has to be researched further so we can show actual correlation and not the faulty causes (for example maybe womens population decreased in these years). 

### Related work


> There are studies done that have explored various aspects of the GBD 2019 dataset, such as the impact of smoking on health and the effectiveness of tobacco control policies [[1]](#Notes). We are planning to focus on dynamically visualizing the global and regional trends in smoking and chewing tobacco prevalence as well as illustrating the contrast between diseases that are attributable to different smoking status within the scope of genders and age groups. This approach will help convey the message more effectively to a broader audience, including non-specialists.
> 
> 
>  
> We have found some relevant visualization on tobacco usage topic which can help us in the beginning to show examples of how can be visualiza our data:
> - https://www.healthdata.org/data-visualization/tobacco-visualization + https://vizhub.healthdata.org/tobacco/
> - https://www.healthdata.org/data-visualization/importance-tobacco-control-mexico


## Notes

* **[1]** Reitsma, Marissa B., et al. "Spatial, temporal, and demographic patterns in prevalence of smoking tobacco use and attributable disease burden in 204 countries and territories, 1990–2019: a systematic analysis from the Global Burden of Disease Study 2019." The Lancet 397.10292 (2021): 2337-2360. 

## Milestone 2 (7th May, 5pm)

**10% of the final grade**

[Milestone 2 document](Milestone2.pdf)

First skeleton of our website can be accessed [here](https://com-480-data-visualization.github.io/project-2023-vizhack/).


## Milestone 3 (4th June, 5pm)

**80% of the final grade**

* Technical Setup
  * We use html, css and Javascript for website design and d3.js to build visualizations.
  * To run our project, firstly you need to clone our repository: ```git clone https://github.com/com-480-data-visualization/project-2023-vizhack```.
  * Then open the page http://localhost:5500/ in your browser.
* Intended Usage
  * Policy and advocacy support: Policymakers and public health professionals can utilize the website as a reference for evidence-based decision-making. Thet can uncover disparities and identify target populations for tailored interventions.
  * Comparative analysis and demographic insights: Users can explore the tobacco prevalence on different demographic groups and geographic regions over the years.
* [Website](https://com-480-data-visualization.github.io/project-2023-vizhack/)
* [Process Book](Process_Book.pdf)
* [Screencast](https://youtu.be/sdlCMOrwBvM)

## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

