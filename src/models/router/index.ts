interface TabIconProps {
  focused: boolean;
  size: number;
  color: string;
  name: string;
}

// Bir türü yeniden dışa aktarırken 'export type' kullanmak gerekir. Bu, modül sınırlarının daha iyi izlenmesine yardımcı olur ve derleyiciye yalnızca türlerin yeniden dışa aktarıldığını açıkça belirtir. Bu, isolatedModules etkin olduğunda TypeScript'in gerektirdiği doğru sözdizimidir.
export type {TabIconProps};
