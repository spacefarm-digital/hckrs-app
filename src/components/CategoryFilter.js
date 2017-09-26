import React from 'react'
import FilterItem from './FilterItem'

const CategoryFilter = () => (
  <FilterItem
    options={[
      'All categories',
      '✈️ Aerospace',
      '🌽 Agriculture',
      '⚗️ Chemical',
      '💻 Computer',
      '🏗 Construction',
      '🍲 Food & Drinks',
      '🎓 Education',
      '⚡️ Energy',
      '🏔 Environment',
      '⚕ Health care',
      '💰 Finance',
      '🚛 Logistical',
      '🏭 Manufacturing',
      '📰 Media',
      '📡 Telecommunications',
      '🚍 Transport',
    ]}
  />
)
export default CategoryFilter
