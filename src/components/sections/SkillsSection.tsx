import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { SkillCategory } from '@/types';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Settings, Zap } from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

// Icon mapping for different skill categories
const categoryIcons: Record<string, any> = {
  'Frontend': Code,
  'Backend': Database,
  'Design': Palette,
  'Tools': Settings,
  'Other': Zap,
};

// Skill level styling
const skillLevelStyles = {
  beginner: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  advanced: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((category) => {
              const IconComponent = categoryIcons[category.name] || Code;
              
              return (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        variants={containerVariants}
                        className="flex flex-wrap gap-2"
                      >
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            variants={skillVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge
                              variant="secondary"
                              className={`cursor-default ${skillLevelStyles[skill.level]} transition-all duration-200`}
                            >
                              {skill.name}
                              <span className="ml-1 text-xs opacity-75">
                                {skill.level === 'beginner' && '⭐'}
                                {skill.level === 'intermediate' && '⭐⭐'}
                                {skill.level === 'advanced' && '⭐⭐⭐'}
                              </span>
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Skills Overview Stats */}
          <motion.div variants={itemVariants} className="mt-12">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {skills.reduce((total, category) => total + category.skills.length, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Skills</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {skills.reduce((total, category) => 
                        total + category.skills.filter(skill => skill.level === 'advanced').length, 0
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">Advanced Skills</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {skills.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Skill Categories</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Legend */}
          <motion.div variants={itemVariants} className="mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className={skillLevelStyles.beginner}>
                      ⭐ Beginner
                    </Badge>
                    <span>Learning & exploring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className={skillLevelStyles.intermediate}>
                      ⭐⭐ Intermediate
                    </Badge>
                    <span>Comfortable & productive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className={skillLevelStyles.advanced}>
                      ⭐⭐⭐ Advanced
                    </Badge>
                    <span>Expert level proficiency</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};